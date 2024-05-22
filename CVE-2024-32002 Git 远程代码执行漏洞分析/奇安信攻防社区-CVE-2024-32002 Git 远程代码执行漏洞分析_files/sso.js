const jsonp = async ($, url) => {
  return new Promise((resolve) => {
    $.ajax({
      async: true,
      url,
      type: 'GET',
      dataType: 'jsonp',
      jsonpCallback: 'callback',
      beforeSend: function(xhr) {
        xhr.withCredentials = true;
      },
      xhrFields: {
        withCredentials: true
      },
      success: function (data) {
        resolve(data)
      },
      error: function (err) {
        resolve(null)
      },
      timeout: 2000
    })
  })
};

// 获取用户中心域名
const getUCDomains = async (hostName, $) => {
  const url = 'https://' + hostName + '/api/v1/user-center-domain?resp_type=jsonp';
  const data = await jsonp($, url);
  return data.data.domains;
};

// 获取sessionID
const getSessionID = async (UCDomains, $) => {
  let sessionID = null;
  for (let i = 0; i < UCDomains.length; i++) {
    const url = 'https://' + UCDomains[i] + '/api/v1/sso/session?resp_type=jsonp';
    const data = await jsonp($, url);
    if (data.uc_session_id) {
      sessionID = data.uc_session_id;
      break;
    }
  }
  return sessionID;
};

// 获取登出的域名
const getLogoutUCDomains = async (hostName, $) => {
  const url = 'https://' + hostName + '/api/v1/apps/logout-urls?resp_type=jsonp';
  const data = await jsonp($, url);
  return data.data;
};

// 登出 sessionid
const logoutSessionId = async (logoutUCDomains, $) => {
  // for (let i = 0;i < logoutUCDomains.length;i++) {
  //   jsonp($, logoutUCDomains[i].url);
  // }
  let list = {}
  const requestQueue = []
  logoutUCDomains.forEach(async item => {
    requestQueue.push(jsonp($, item.url))
  })
  const responseData = await Promise.all(requestQueue)
  responseData.forEach((item, index) => {
    const tempAppTag = logoutUCDomains[index].app_tag
    if (!item) return;
    list[tempAppTag] = {
      type: (logoutUCDomains[index].logout_resp_key && item[logoutUCDomains[index].logout_resp_key] === logoutUCDomains[index]['logout_resp_value']) || !logoutUCDomains[index].logout_resp_key ? 'success' : 'error',
      response_info: { ...item }
    }
  })
  return list;
};

// 获取SessionID
const getUCSessionID = async (hostName, jquery) => {
  const $ = jquery;
  // 遍历用户中心域名
  let UCDomains = await getUCDomains(hostName, $);
  // 获取sessionID
  let sessionID = await getSessionID(UCDomains, $);
  return sessionID;
};
// 登出sessionID
const clearUCSessionID = async (hostName, jquery, redirect, handler) => {
  const $ = jquery;
  const UCDomains = await getUCDomains(hostName, $)
  if(!redirect) { // 兼容老逻辑
    let logoutUCDomains = []
    for (let i = 0; i < UCDomains.length; i++) {
      // 各应用退出接口、清除用户中心的会话连接
      logoutUCDomains = await getLogoutUCDomains(UCDomains[i], $);
    }
    if(!Array.isArray(logoutUCDomains)) {
      logoutUCDomains = [];
    }
    const data = await logoutSessionId(logoutUCDomains, jquery);
    return data;
  } else {
    let logoutUCDomains = null
    // 用户中心域名
    const UCDomains = await getUCDomains(hostName, $)
    for (let i = 0; i < UCDomains.length; i++) {
      // 各应用退出接口、清除用户中心的会话连接
      logoutUCDomains = await getLogoutUCDomains(UCDomains[i], $);
    }
    if (Array.isArray(logoutUCDomains)) {
      // 真实各应用退出
      const data = await logoutSessionId(logoutUCDomains, $);
      if (handler) {
        handler();
      }
      return data;
    } else {
      if (handler) {
        handler();
      }
      window.location.href = logoutUCDomains + '?next=' + redirect;
    }
  }
};

window.sessionModule = {
  getUCSessionID,
  clearUCSessionID
};

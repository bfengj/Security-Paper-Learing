// 微信分享内容填充和调用分享方法
function WXshare(param) {
  var title = param.title;
  var imgUrl = param.imgUrl;
  var description = param.description;
  var url = param.url;
  var successMethod = param.successMethod;

  // 分享给朋友的data
  var shareAppMessageData = {
    title: title,
    desc: description,
    link: url,
    imgUrl: imgUrl,
    success: successMethod
  };
  //分享给朋友
  wx.updateAppMessageShareData(shareAppMessageData);
  //分享给朋友圈
  wx.updateTimelineShareData(shareAppMessageData);
}

function QQshare(data, param) {
  var title = param.title;
  var imgUrl = param.imgUrl;
  var description = param.description;
  var url = param.url;

  // 分享给朋友的data
  var shareAppMessageData = {
    title: title,
    summary: description,
    url: url,
    pic: imgUrl,
    WXconfig: {
      swapTitleInWX: true,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
  }
  };

  setShareInfo(shareAppMessageData)
}

// 页面调用分享功能的方法
function initShare(param) {
  if (!param) {
    return;
  }
  sign(param);
}

// 向后端请求权限验证配置的基本数据
async function sign(param) {
  const url = window.location.href
  let data={}
  $.ajax({
    url: '/wechatshare',
    type: "post",
    data: {
      url:url 
    },
    success: function (res) {
      data = res
      initAPIs(data, param);
      QQshare(data, param.callback)
    }
  })
}

// 权限验证数据填充
function initAPIs(data, param) {
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: data.appId,
    timestamp: data.timestamp,
    nonceStr: data.nonceStr,
    signature: data.signature,
    jsApiList: param.APIs
  });
  // 验证成功后执行的方法
  wx.ready(function() {
    if (Object.keys(param.callback).length !== 0) {
      WXshare(param.callback);
    }
  });
  // 验证失败后执行的方法
  wx.error(function(res){
    console.log(res,'验证失败')
  });
  // 判断客户端是否支持指定js的接口
  wx.checkJsApi({
    jsApiList: param.APIs,
    success: function(res) {
      return res;
    }
  });
}

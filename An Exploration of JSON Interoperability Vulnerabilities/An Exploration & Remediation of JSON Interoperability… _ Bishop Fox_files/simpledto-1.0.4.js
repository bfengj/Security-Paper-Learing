/*
 @author Sanford Whiteman, TEKNKL (blog.teknkl.com / sandy@teknkl.com)
 @version v1.0.4
 @copyright Copyright 2016, 2017, 2018, 2019 FigureOne, Inc.
 @license MIT License: You must include this license and the above credits in all uses & reproductions of this software.
*/
function SimpleDTO(a) {
  var e = Function.prototype.call.bind(Array.prototype.slice);
  try {
    a.debug && console.log("SimpleDTO: Unifying domains " + [document.domain, a.domain].join(", ")), document.domain = a.domain;
  } catch (b) {
    throw "SimpleDTO: Domain unification error, domain: " + a.domain;
  }
  if ("receive" == a.mode) {
    var c = document.createElement("iframe");
    this.setSource = function(b) {
      c.src = b;
    };
    this.getSource = function() {
      return d;
    };
    c.addEventListener("load", function() {
      this.data || this.src ? (a.debug && console.log("SimpleDTO: running callback"), a.cb && a.cb.call(this, f)) : console.warn("SimpleDTO: skipping load event due to empty data src or callback");
    });
    c.setAttribute("data-transfer-object", "true");
    [["visibility", "hidden"], ["position", "absolute"], ["height", "0"]].forEach(function(b) {
      c.style.setProperty.apply(c.style, b);
    });
    var d = document.createElement("a");
    d.href = a.dataSrc || "";
    a.noReplaceQuery || (d.search = document.location.search);
    window.__mktTokVal && (d.search += (1 < d.search.length ? "&" : "") + ["mkt_tok", window.__mktTokVal].join("="));
    a.noInit || this.setSource(d.href);
    document.body.appendChild(c);
  }
  var f = this;
  return {getGlobal:function() {
    return c.contentWindow;
  }, cleanup:function() {
    var b = c.contentWindow.frameElement;
    b.parentNode.removeChild(b);
  }, parse:function(b) {
    b = document.querySelector('.dto-xml[data-field-collection="' + b + '"]').text;
    b = (new DOMParser).parseFromString(b, "application/xml");
    var a = b.querySelector("mktoPreFillFields");
    a = a.getAttribute("varName") || a.tagName;
    var c = {};
    e(b.querySelectorAll("mktoPreFillFields mktoField")).forEach(function(a) {
      c[a.getAttribute("inputName")] = a.textContent;
    });
    return self[a] = c;
  }};
}
window.SimpleDTO = SimpleDTO;

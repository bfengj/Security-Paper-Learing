const ZOOM_IN_FACTOR = 1.05;
const ZOOM_OUT_FACTOR = 0.95;
function zoomImage(image, factor) {
  var h = image.height();
  var w = image.width();
  h = h * factor;
  w = w * factor;
  adjustImageSize(image, h, w);
}
function adjustImageSize(image, h, w) {
  var imagep = $(".layui-layer-phimg").parent().parent();
  imagep.css("top", (window.innerHeight - h) / 2);
  imagep.css("left", (window.innerWidth - w) / 2);
  image.height(h);
  image.width(w);
  imagep.height(h);
  imagep.width(w);
}
// 鼠标滚轮事件处理
$(document).on("mousewheel DOMMouseScroll", ".layui-layer-phimg img", function (e) {
  var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
    (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
  var image = $(".layui-layer-phimg").parent();
  var h = image.height();
  var w = image.width();
  if (delta > 0 && h < (window.innerHeight - 60) && w < (window.innerWidth - 60)) {
    zoomImage(image, ZOOM_IN_FACTOR);
  } else if (delta < 0 && h > 100) {
    zoomImage(image, ZOOM_OUT_FACTOR);
  }
});

// 点击放大按钮
$(document).on("click", "#zoomInButton", function (e) {
  var image = $(".layui-layer-phimg").parent();
  zoomImage(image, ZOOM_IN_FACTOR);
});

// 点击缩小按钮
$(document).on("click", "#zoomOutButton", function (e) {
  var image = $(".layui-layer-phimg").parent();
  zoomImage(image, ZOOM_OUT_FACTOR);
});
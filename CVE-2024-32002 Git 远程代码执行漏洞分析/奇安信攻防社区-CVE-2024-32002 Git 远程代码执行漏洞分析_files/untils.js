window.toast = (function() {
    var $toast = $('<div style="' +
                        'display:none;' + 
                        'position:fixed;' + 
                        'top:40%;' + 
                        'left:50%;' + 
                        'z-index:9999;' + 
                        'transform: translate(-50%, -50%);' + 
                        'padding: 3px 15px;' + 
                        'border-radius:8px;' + 
                        'background: rgba(120, 120, 120, 0.7);' + 
                        'box-shadow: 1px 1px 3px 1px rgba(160, 160, 160, 0.6);' + 
                        'text-align:center;' + 
                        'font-size:12px;' + 
                        'color:#fff;">' +
                    '</div>');
    $toast.appendTo($('body'));
    var timer = null;
    return function(text, delay) {
        if(timer) {
            clearTimeout(timer);
            $toast.hide();
        }
        $toast.text(text).fadeIn();
        timer = setTimeout(function() {
            $toast.fadeOut();
            timer = null;
        }, delay || 1500);
    }
})()
window.throttle = function(fn, delay){
    let valid = true;
    return function() {
        if(!valid){
            return false;
        }
        var arg = arguments;
        valid = false;
        setTimeout(function() {
            fn.apply(null, arg)
            valid = true;
        }, delay);
    }
};
window.debounce =  function (fn,delay){
    let timer = null;
    return function() {
        var arg = arguments;
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            fn.apply(null, arg);
        },delay);
    }
}

window.showLoading = (function() {
    var $loading = $(`
    <div id="windowLoading" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="loading text-center text-warning">
                        <i class="fa fa-spinner fa-spin fa-2x" aria-hidden="true"></i>
                        <br/>
                        <span class="text">加载中</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `);
    $loading.appendTo($('body'));
    return function(text) {
        $('#windowLoading .text').text(text || '加载中');
        $('#windowLoading').modal({backdrop:'static'});
    }
})()

window.hideLoading = function() {
    $('#windowLoading').modal('hide');
}
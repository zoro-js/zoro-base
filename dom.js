var util = require('./util');

var dom = {};

dom.on = dom.addEventListener = function(node, type, callback) {
    if (node.addEventListener) {
        node.addEventListener(type, callback, false);
    } else if (node.attachEvent) {
        node.attachEvent('on'+type, callback);
    }
};

dom.off = dom.removeEventListener = function(node, type, callback) {
    if (node.removeEventListener) {
        node.removeEventListener(type, callback, false);
    } else if (node.detachEvent) {
        node.detachEvent('on'+type, callback);
    }
};

dom.createIframe = function(options) {
    options = options || {};
    var iframe = document.createElement('iframe');
    iframe.frameBorder = 0;
    if (options.name) {
        iframe.name = options.name;
    }
    if (!options.visible) {
        iframe.style.display = 'none';
    }
    if (util.isFunction(options.onload)) {
        dom.on(iframe, 'load', function onIframeLoad(event) {
            if (!iframe.src) {
                return;
            }
            dom.off(iframe, 'load', onIframeLoad);
            options.onload(event);
        });
        // will trigger onload
        var parent = options.parent;
        (parent || document.body).appendChild(iframe);
        // ensure trigger onload async
        var src = options.src || 'about:blank';
        setTimeout(function() {
            iframe.src = src;
        }, 0);
        return iframe;
    }
};

module.exports = dom;
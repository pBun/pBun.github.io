'use strict';

(function() {
    var addClass = function(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    };
    var waterfallElements = document.querySelectorAll('.blog .tile');
    waterfallElements.forEach(function(el, i) {
        setTimeout(function() {
            addClass(el, 'animate');
        }, i * 300);
    });
    var tileAnchors = document.querySelectorAll('a.tile');
    tileAnchors.forEach(function(el, i) {
        el.addEventListener('click', function(e) {
            this.blur();
        });
    });
})();

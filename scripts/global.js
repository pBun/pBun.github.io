'use strict';
 (function() {
    // helpers
    var addClass = function(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    };
     // waterfall blog tiles
    var waterfallElements = document.querySelectorAll('.js-waterfall');
    waterfallElements.forEach(function(el, i) {
        el.style.opacity = 0;
        setTimeout(function() {
            addClass(el, 'js-fadeIn');
        }, i * 50);
    });
     // project link blur (to avoid weird styling after clicking links)
    var projectLinks = document.querySelectorAll('.Project');
    projectLinks.forEach(function(el, i) {
        el.addEventListener('click', function(e) {
            this.blur();
        });
    });
    function isTouchEnabled() {
        return ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 );
    }
    if (!isTouchEnabled()) {
        addClass(document.querySelector('body'), 'touch-disabled');
    }
})();

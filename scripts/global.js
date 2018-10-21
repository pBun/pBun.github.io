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
        }, i * 75);
    });
     // project link blur (to avoid weird styling after clicking links)
    var projectLinks = document.querySelectorAll('.Project__link');
    projectLinks.forEach(function(el, i) {
        el.addEventListener('click', function(e) {
            this.blur();
        });
    });
})();

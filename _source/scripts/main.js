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
    var getElHeight = function(el) {
        var linkStyles = window.getComputedStyle(el, null);
        return parseInt(linkStyles.height || 0);
    };
    var equalizeEls = function(els) {
        var tallestEl;
        var tallestHeight = 0;
        els.forEach(function(el, i) {
            var oldHeight = el.style.height;
            el.style.height = null;
            var linkHeight = getElHeight(el);
            el.style.height = oldHeight;
            if (linkHeight > tallestHeight) {
                tallestEl = el;
                tallestHeight = linkHeight;
            }
        });
        els.forEach(function(el, i) {
            el.style.height = tallestHeight + 'px';
        });
    };

    // waterfall blog tiles
    var waterfallElements = document.querySelectorAll('.waterfall');
    waterfallElements.forEach(function(el, i) {
        el.style.opacity = 0;
        setTimeout(function() {
            addClass(el, 'animate');
        }, i * 100);
    });

    // project link blur (to avoid weird styling after clicking links)
    var projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(function(el, i) {
        el.addEventListener('click', function(e) {
            this.blur();
        });
    });

    // project link height equalization
    var equalizeProjects = function() {
        if (window.innerWidth <= 500) {
            projectLinks.forEach(function(el, i) {
                el.style.height = null;
            });
        } else {
            equalizeEls(projectLinks);
        }
    };
    equalizeProjects();
    var resizeTimeout;
    window.addEventListener('resize', function(e) {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(equalizeProjects, 100);
    });
})();

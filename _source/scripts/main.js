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
  	setTimeout(function () {
  		addClass(el, 'animate');
	}, i * 300);
  });
  document.querySelectorAll('a').addEventListener('click', function() {
    var event = document.createEvent('HTMLEvents');
	event.initEvent('blur', true, false);
	this.dispatchEvent(event);
  });
})();

'use strict';

(function() {
  var waterfallElements = $('.blog .tile');
  $.each(waterfallElements, function (i, element) {
    setTimeout(function () {
      $(element).addClass('animate');
    }, (i * 300) + 1000);
  });
}());

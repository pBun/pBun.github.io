'use strict';

(function() {
  var waterfallElements = $('.blog .tile').addClass('slidein');
  $.each(elements, function (i, element) {
    setTimeout(function () {
      $(element).addClass('animate');
    }, i * 300);
  });
}());

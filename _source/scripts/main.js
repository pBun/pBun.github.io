'use strict';

(function() {
  function waterfallAnimate(elements) {
    $.each(elements, function (i, element) {
      setTimeout(function () {
        $(element).show();
        $(element).addClass('animate');
      }, i * 300);
    });
  }
  waterfallAnimate($('.blog .tile').addClass('slidein').hide());
}());

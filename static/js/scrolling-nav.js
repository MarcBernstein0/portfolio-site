(function ($) {
  "use strict"; // Start of use strict

  const $navElem = $('.navbar');

  $(window).on('scroll', () => {
    if ($(window).scrollTop() >= 56) {
      $navElem.addClass('navbar-scrolled');
    } else {
      $navElem.removeClass('navbar-scrolled');
    }
  });
})(jQuery); // End of use strict



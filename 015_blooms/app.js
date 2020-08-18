$(document).ready(function () {
  $(window).scroll(function () {
    var height = $('.helo').height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= height - 108) {
      $('.nav-container').addClass('solid-nav');
    } else {
      $('.nav-container').removeClass('solid-nav');
    }
  });
});

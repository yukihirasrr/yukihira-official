$(document).on('turbolinks:load', function() {
  $(function() {
    $('.p-home__hero').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
  });
  $(function() {
    $('.p-movie__hero').slick({
        dots: true,
    });
  });
});
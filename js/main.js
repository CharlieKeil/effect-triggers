var $body = $('body');
var $show = $('.btn-show-hide');
var $move = $('.btn-move');
var $collapse = $('.btn-collapse-expand');
var $bounce = $('.btn-bounce');
var $append = $('.btn-append');

$body.on('click', '.btn-show-hide', function () {
  $('.box').toggleClass('is-clicked');
});

$body.on('click', '.btn-move', function () {
  $('.diamond').toggleClass('move');
});

$body.on('click', '.btn-collapse-expand', function () {
  $('.panel').toggleClass('collapse');
});

$body.on('click', '.btn-bounce', function () {
  $('.circle').addClass('bounce');
});

$('.circle').on('animationend', function () {
  $(this).removeClass('bounce');
});

$body.on('click', '.btn-append', function () {
  $('.list').append('<li>New List Item</li>');
});

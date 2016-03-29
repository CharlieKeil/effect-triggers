var $body = $ ('body');

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
  $('.circle').toggleClass('bounce');
});

$body.on('animationend', 'circle', function () {
  $(this).removeClass('bounce');
});

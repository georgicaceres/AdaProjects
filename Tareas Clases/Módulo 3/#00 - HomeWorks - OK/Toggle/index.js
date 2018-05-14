$('#header').on('click', function(e) {
  $(this).toggleClass('changeH');
});

$('section').on('click', function(e) {
  $(this).siblings().toggleClass('changeS');
});

$('#article2').on('click', function(e) {
  $(this).siblings().toggleClass('changeA');
})

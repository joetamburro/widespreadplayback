console.log('main loaded')

$('.navigation-bar .nav').click(function(){ 
  console.log('nav clicked')
  $('.navigation-bar .nav').removeClass('current-tab'); 
  $(this).addClass('current-tab'); 
})
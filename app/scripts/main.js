console.log('hello mainjs')

$('.nav').click(function(){
   $(this).addClass('hoverd').siblings().removeClass('hoverd')
})
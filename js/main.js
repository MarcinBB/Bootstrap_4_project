$(function(){
    console.log('DOM loaded - you can have fun')
  })
$(document).ready(function() {
    $('.header').height($(window).height());
  })
$('.navbar a').click(function(){
    $('body,html').animate({scrollTop:$('#' + $(this).data('value')).offset().top},1000)
})
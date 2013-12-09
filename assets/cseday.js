$(document).ready (

$('.footer').hover(function(e){
	 e.preventDefault();
  $('.expander').slideToggle();
  $('.expander ').animate({scrollTop: $('.expander')[0].scrollHeight}, 'slow');
  $('html, body').animate({scrollTop: $(document).height()}, 'slow');
  });

});​
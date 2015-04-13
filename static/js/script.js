// SlideToggle


$( ".MainMenu-icon" ).click(function() {
  $( ".MainMenu" ).slideToggle( "" );
});

$( ".NextEvent-toggle" ).click(function() {
  $( ".NextEvent-detail" ).slideToggle( "" );
});


	var btn = $('.MainSection-cta');
	btn.mouseover(function(){
	  btn.addClass('btn-Green').removeClass('btn-Red')
	});
	btn.mouseout(function(){
	  btn.addClass('btn-Red').removeClass('btn-Green')
	});

// jQuery on document ready

$(document).ready(function(){

	$(window).resize(function(){
	  if(window.innerWidth>=1001){
	 	$('.MainMenu').css({'display':'block'})
	}else if(window.innerWidth<1001){
	  $('.MainMenu').css({'display':'none'})}
	});

})


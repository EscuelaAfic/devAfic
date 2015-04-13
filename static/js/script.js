// SlideToggle


$( ".MainMenu-icon" ).click(function() {
  $( ".MainMenu" ).slideToggle( "" );
});

$( ".NextEvent-toggle" ).click(function() {
  $( ".NextEvent-detail" ).slideToggle( "" );
});



$(document).ready(function(){

	$(window).resize(function(){
	  if(window.innerWidth>=1001){
	 	$('.MainMenu').css({'display':'block'})
	}else if(window.innerWidth<1001){
	  $('.MainMenu').css({'display':'none'})}
	})

})


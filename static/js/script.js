// SlideToggle


$( ".MainMenu-icon" ).click(function() {
  $( ".MainMenu" ).slideToggle( "" );
});

$( ".NextEvent-toggle" ).click(function() {
  $( ".NextEvent-detail" ).slideToggle( "" );
});

$('#MainSection-cta').on('mouseover', function(){
	this.className('MainSection-cta btn btn-big btn-Green')
})

$('#MainSection-cta').on('mouseout', function(){
	this.className('MainSection-cta btn btn-big btn-Red')
})

// jQuery on document ready

$(document).ready(function(){

	$(window).resize(function(){
	  if(window.innerWidth>=1001){
	 	$('.MainMenu').css({'display':'block'})
	}else if(window.innerWidth<1001){
	  $('.MainMenu').css({'display':'none'})}
	})



})


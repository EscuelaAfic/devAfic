// SlideToggle


$( ".MainMenu-icon" ).click(function() {
  $( ".MainMenu" ).slideToggle( "" );
});

$( ".NextEvent-toggle" ).click(function() {
  $( ".NextEvent-detail" ).slideToggle( "" );
});



// jQuery on document loaded

$(window).load(function(){
	
  if(window.innerWidth<700){
    $('#MainSection-cta').removeClass('btn-big');
    $('#MainSection-cta').addClass('btn-small')
  } 
})



// jQuery on document ready

$(document).ready(function(){

	// Mostrar menu en bo grande
	$(window).resize(function(){
	  if(window.innerWidth>=1001){
	 	$('.MainMenu').css({'display':'block'})
	}else if(window.innerWidth<1001){
	  $('.MainMenu').css({'display':'none'})}
	});

	$(window).resize(function(){
	  if(window.innerWidth>700){
	    $('#MainSection-cta').removeClass('btn-small');
	    $('#MainSection-cta').addClass('btn-big')
	  } else if(window.innerWidth<700){
	    $('#MainSection-cta').removeClass('btn-big');
	    $('#MainSection-cta').addClass('btn-small')
	  }
	})


})


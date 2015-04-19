// SlideToggle


$( ".MainMenu-icon" ).click(function() {
  $( ".MainMenu" ).slideToggle( );
});

$( ".NextEvent-toggle" ).click(function() {
  $( ".NextEvent-detail" ).slideToggle( );
});

$( ".ListOne-toggle" ).click(function() {
  $( ".listOne" ).slideToggle( );
});

$( ".ListTwo-toggle" ).click(function() {
  $( ".listTwo" ).slideToggle( );
});

$( ".ListThree-toggle" ).click(function() {
  $( ".listThree" ).slideToggle( );
});

$( ".Descount-seeOfer" ).click(function() {
  $( ".Descount-courses" ).slideToggle( );
});

// jQuery on document ready

$(document).ready(function(){

	if(window.innerWidth<700){
	    $('#MainSection-cta').removeClass('btn-big');
	    $('#MainSection-cta').addClass('btn-small')
	  } else if(window.innerWidth>=700){
	    $('.Index .Section-title').addClass('center')
	    $('.Index .empty').addClass('u-wrapper')
	};



	$('.listOne').css({'display':'block'});

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
	});

	$(window).resize(function(){
	  if(window.innerWidth>700){
	    $('.Index .Section-title').addClass('center');
	  } else if(window.innerWidth<700){
	    $('.Index .Section-title').removeClass('center');
	  }
	});


})


$(".MainMenu-icon").click(function(){$(".MainMenu").slideToggle("")}),$(".NextEvent-toggle").click(function(){$(".NextEvent-detail").slideToggle("")}),$(window).load(function(){window.innerWidth<700?$(".MainSection-cta").addClass("btn-small"):window.innerWidth>700&&$(".MainSection-cta").addClass("btn-big")}),$(document).ready(function(){$(window).resize(function(){window.innerWidth>=1001?$(".MainMenu").css({display:"block"}):window.innerWidth<1001&&$(".MainMenu").css({display:"none"})})});
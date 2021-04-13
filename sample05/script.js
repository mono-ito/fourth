$(document).ready(function(){

  $("#menuList01, #menuList02, #menuList03").hide();
  
	$('#menuBtn01').hover(function(){
    $('#menuList01:not(:animated)').slideDown(500);
	}, function(){
    $('#menuList01').slideUp(500);
  });
  
	$('#menuBtn02').hover(function(){
    $('#menuList02:not(:animated)').slideDown(500);
	}, function(){
    $('#menuList02').slideUp(500);
  });
  
	$('#menuBtn03').hover(function(){
    $('#menuList03:not(:animated)').slideDown(500);
	}, function(){
    $('#menuList03').slideUp(500);
  });

});
$(document).ready(function(){

	$('#btnScroll01').click(function(){
    $('html,body').animate({
      "scrollTop": $("#content01").offset().top
    },400,'swing');
    return false;
	});

	$('#btnScroll02').click(function(){
    $('html,body').animate({
      "scrollTop": $("#content02").offset().top
    },400,'swing');
    return false;
	});

	$('#btnScroll03').click(function(){
    $('html,body').animate({
      "scrollTop": $("#content03").offset().top
    },400,'swing');
    return false;
	});

});
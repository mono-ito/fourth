$(document).ready(function(){

  $("#lightBox").hide();
  $("#overlay").hide();
  
	$('#btnOpen').click(function(){
    $('#lightBox').fadeIn(500);
    $('#overlay').fadeIn(500);
    return false;
	});
  
	$('#btnClose').click(function(){
    $('#lightBox').fadeOut(500);
    $('#overlay').fadeOut(500);
    return false;
	});

});
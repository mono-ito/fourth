$(document).ready(function(){

  $("#panel02 p, #panel03 p").hide();

  $("#panel01 h3").click(function(){
    $("#panel01 p").slideToggle(500);
  });
  $("#panel02 h3").click(function(){
    $("#panel02 p").slideToggle(500);
  });
  $("#panel03 h3").click(function(){
    $("#panel03 p").slideToggle(500);
  });
  
});
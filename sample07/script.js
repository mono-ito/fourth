$(document).ready(function(){

  $(".imgController li p").hide();

  $("#thumb01").mouseover(function(){
    $("#thumb01 p").show();
  }).mouseout(function(){
    $("#thumb01 p").hide();
  });

  $("#thumb02").mouseover(function(){
    $("#thumb02 p").show();
  }).mouseout(function(){
    $("#thumb02 p").hide();
  });

  $("#thumb03").mouseover(function(){
    $("#thumb03 p").show();
  }).mouseout(function(){
    $("#thumb03 p").hide();
  });

  $("#thumb04").mouseover(function(){
    $("#thumb04 p").show();
  }).mouseout(function(){
    $("#thumb04 p").hide();
  });


});
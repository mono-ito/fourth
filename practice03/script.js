$(document).ready(function(){

  $("#thumb01").click(function(){
    $("#mainSlideIn ul").animate({
      "left": "0px"
    },"500","swing");
    return false;
  });
  $("#thumb02").click(function(){
    $("#mainSlideIn ul").animate({
      "left": "-970px"
    },"500","swing");
    return false;
  });
  $("#thumb03").click(function(){
    $("#mainSlideIn ul").animate({
      "left": "-1940px"
    },"500","swing");
    return false;
  });
  $("#thumb04").click(function(){
    $("#mainSlideIn ul").animate({
      "left": "-2910px"
    },"500","swing");
    return false;
  });

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
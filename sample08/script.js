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

});
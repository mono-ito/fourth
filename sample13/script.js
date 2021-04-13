$(document).ready(function(){

  $(".imgController li").click(function(){
    var moveSet = 970;
    var moveCount = $(this).index() * moveSet * -1;
    $("#mainSlideIn ul").animate({
      "left": moveCount + "px"
    },"500","swing");
    return false;
  });

  $(".imgController li").mouseover(function(){
    $(this).animate({
      "opacity": "0.6"
    });
  }).mouseout(function(){
    $(this).animate({
      "opacity": "1.0"
    });
  });

});
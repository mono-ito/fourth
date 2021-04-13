$(document).ready(function(){

  //サンプルその１
  $("#btnShow").click(function(){
    $("#box_sample01").show("slow");
  });
  $("#btnHide").click(function(){
    $("#box_sample01").hide("slow");
  });

  //サンプルその2
  $("#btnFadeIn").click(function(){
    $("#box_sample02").fadeIn("slow");
  });
  $("#btnFadeOut").click(function(){
    $("#box_sample02").fadeOut("slow");
  });

  //サンプルその3
  $("#btnSlideUp").click(function(){
    $("#box_sample03").slideUp("slow");
  });
  $("#btnSlideDown").click(function(){
    $("#box_sample03").slideDown("slow");
  });

  //サンプルその4
  $("#btnAnime1").click(function(){
    $("#box_sample_animate01 img").animate({
      "left": "0",
      "top": "0",
      "width": "200px"
    },1000, "swing");
  });
  $("#btnAnime2").click(function(){
    $("#box_sample_animate01 img").animate({
      "left": "200px",
      "top": "100px",
      "width": "500px"
    },500, "linear");
  });
  $("#btnAnime3").click(function(){
    $("#box_sample_animate01 img").animate({
      "left": "500px",
      "top": "200px",
      "width": "100px"
    },100, "swing");
  });
  
});
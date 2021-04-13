$(document).ready(function(){

  $("#menuList01, #menuList02, #menuList03").hide();

  $("#menuBtn01").on("mouseenter",function(){
    $("#menuList01:not(:animated)").slideDown(500);
  }).on("mouseleave",function(){
    $("#menuList01").slideUp(500);
  });

  $("#menuBtn02").on("mouseenter",function(){
    $("#menuList02:not(:animated)").slideDown(500);
  }).on("mouseleave",function(){
    $("#menuList02").slideUp(500);
  });

  $("#menuBtn03").on("mouseenter",function(){
    $("#menuList03:not(:animated)").slideDown(500);
  }).on("mouseleave",function(){
    $("#menuList03").slideUp(500);
  });


  $("#link01_01").on("click", function(){
    $("html,body").animate({
      "scrollTop": $("#content01").offset().top
    });
    return false;
  });

  $("#link01_02").on("click", function(){
    $("html,body").animate({
      "scrollTop": $("#content02").offset().top
    });
    return false;
  });

  $("#link01_03").on("click", function(){
    $("html,body").animate({
      "scrollTop": $("#content03").offset().top
    });
    return false;
  });

  $("#link02_01").on("click", function(){
    $("html,body").animate({
      "scrollTop": $("#content04").offset().top
    });
    return false;
  });

  $("#link02_02").on("click", function(){
    $("html,body").animate({
      "scrollTop": $("#content05").offset().top
    });
    return false;
  });

  $("#link02_03").on("click", function(){
    $("html,body").animate({
      "scrollTop": $("#content06").offset().top
    });
    return false;
  });

  $("#link03_01").on("click", function(){
    $("html,body").animate({
      "scrollTop": $("#content07").offset().top
    });
    return false;
  });

  $("#link03_02").on("click", function(){
    $("html,body").animate({
      "scrollTop": $("#content08").offset().top
    });
    return false;
  });

  $("#link03_03").on("click", function(){
    $("html,body").animate({
      "scrollTop": $("#content09").offset().top
    });
    return false;
  });








});
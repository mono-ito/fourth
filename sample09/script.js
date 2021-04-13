$(document).ready(function(){

  $("#tab02, #tab03").hide();
  
  $("#btnTab01").click(function(){
    $("#tab02, #tab03").fadeOut(500);
    $("#tab01").fadeIn(500);
    return false;
  });
  
  $("#btnTab02").click(function(){
    $("#tab01, #tab03").fadeOut(500);
    $("#tab02").fadeIn(500);
    return false;
  });
  
  $("#btnTab03").click(function(){
    $("#tab01, #tab02").fadeOut(500);
    $("#tab03").fadeIn(500);
    return false;
  });

  $("#btnTab01").addClass("active");
  
  $("#btnTab01").click(function(){
    $("#btnTab02, #btnTab03").removeClass("active");
    $("#btnTab01").addClass("active");
    return false;
  });
  
  $("#btnTab02").click(function(){
    $("#btnTab01, #btnTab03").removeClass("active");
    $("#btnTab02").addClass("active");
    return false;
  });
  
  $("#btnTab03").click(function(){
    $("#btnTab01, #btnTab02").removeClass("active");
    $("#btnTab03").addClass("active");
    return false;
  });
  
});
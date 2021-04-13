$(document).ready(function(){

  var rand = Math.floor( Math.random() * 3 ) + 1 ;
  $("#paraImg").html('<img src="../img/paraImg0'+rand+'.jpg">');

  $(window).scroll(function () {
    $("#paraImg").css({
      "top": $(document).scrollTop()/10 * -1
    });
  });

});
$(document).ready(function(){

  $(window).scroll(function () {
    $("#paraImg").css({
      "top": $(document).scrollTop()/10 * -1
    });
  });

});
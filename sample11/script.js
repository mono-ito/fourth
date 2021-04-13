$(document).ready(function(){

  var rand = Math.floor( Math.random() * 4 ) + 1 ;

  $("#randomImg").html('<img src="../img/img0'+rand+'.jpg">');
  
});
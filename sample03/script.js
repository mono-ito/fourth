$(document).ready(function(){

  //ロールオーバーで画像切り替え
  $("#thumb01").mouseover(function(){
    $("#thumb01 img").attr("src","../img/img03.jpg");
  }).mouseout(function(){
    $("#thumb01 img").attr("src","../img/img01.jpg");  
  });
  $("#thumb02").mouseover(function(){
    $("#thumb02 img").attr("src","../img/img04.jpg");
  }).mouseout(function(){
    $("#thumb02 img").attr("src","../img/img02.jpg");  
  });

  //ロールオーバーでCSSを変える
  $("#thumb03").mouseover(function(){
    $("#thumb03 img").css({
      "opacity": "0.6"
    });
  }).mouseout(function(){
    $("#thumb03 img").css({
      "opacity": "1"
    });
  });
  $("#thumb04").mouseover(function(){
    $("#thumb04 img").css({
      "opacity": "0.6"
    });
  }).mouseout(function(){
    $("#thumb04 img").css({
      "opacity": "1"
    });
  });

  //ロールオーバーでアニメーションエフェクトを入れる
  $("#thumb05").mouseover(function(){
    $("#thumb05 img").animate({
      "opacity": "0.6"
    },"500","swing");
  }).mouseout(function(){
    $("#thumb05 img").animate({
      "opacity": "1"
    },"500","swing");
  });
  $("#thumb06").mouseover(function(){
    $("#thumb06 img").animate({
      "opacity": "0.6"
    },"500","swing");
  }).mouseout(function(){
    $("#thumb06 img").animate({
      "opacity": "1"
    },"500","swing");
  });

});
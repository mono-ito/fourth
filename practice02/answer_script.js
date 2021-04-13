$(document).ready(function(){

  //ドロップダウン
  $("#menuList01, #menuList02, #menuList03").hide();
  
	$('#menuBtn01').hover(function(){
    $('#menuList01:not(:animated)').slideDown(500);
	}, function(){
    $('#menuList01').slideUp(500);
  });
  
	$('#menuBtn02').hover(function(){
    $('#menuList02:not(:animated)').slideDown(500);
	}, function(){
    $('#menuList02').slideUp(500);
  });
  
	$('#menuBtn03').hover(function(){
    $('#menuList03:not(:animated)').slideDown(500);
	}, function(){
    $('#menuList03').slideUp(500);
  });

  //スムーズスクロール  
	$('#link01_01').click(function(){
    $('html,body').animate({
      "scrollTop": $("#content01").offset().top
    },400,'swing');
    return false;
	});

	$('#link01_02').click(function(){
    $('html,body').animate({
      "scrollTop": $("#content02").offset().top
    },400,'swing');
    return false;
	});

	$('#link01_03').click(function(){
    $('html,body').animate({
      "scrollTop": $("#content03").offset().top
    },400,'swing');
    return false;
	});

  $('#link02_01').click(function(){
    $('html,body').animate({
      "scrollTop": $("#content04").offset().top
    },400,'swing');
    return false;
	});

	$('#link02_02').click(function(){
    $('html,body').animate({
      "scrollTop": $("#content05").offset().top
    },400,'swing');
    return false;
	});

	$('#link02_03').click(function(){
    $('html,body').animate({
      "scrollTop": $("#content06").offset().top
    },400,'swing');
    return false;
	});

  $('#link03_01').click(function(){
    $('html,body').animate({
      "scrollTop": $("#content07").offset().top
    },400,'swing');
    return false;
	});

	$('#link03_02').click(function(){
    $('html,body').animate({
      "scrollTop": $("#content08").offset().top
    },400,'swing');
    return false;
	});

	$('#link03_03').click(function(){
    $('html,body').animate({
      "scrollTop": $("#content09").offset().top
    },400,'swing');
    return false;
	});

});
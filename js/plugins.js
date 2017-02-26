/*global $,alert,consol*/
													/*Home*/
$(document).ready(function () {
	'use strict';
	
    $('#graph_1,#graph_2,#graph_3,#graph_4,#graph_5,#graph_6').circliful({
        animationStep: 3,
        foregroundBorderWidth: 7,
        backgroundBorderWidth: 7,
        percent: 75,
		animateInView: true,
		textAdditionalCss:'padding-bottom:20px;',
		textStyle: 'font-size:28px;',
		fontColor:'#333'
    });
		var mixer = mixitup('.pro_image');
$("li a").click(function(){$('html, body').animate({scrollTop:$("#"+$(this).data('value')).offset().top},1500);});
	$(".nav li:first-of-type").click(function(){$('html, body').animate({scrollTop:0},500);});
	$('#ski').mouseover(function(){
		$('#se_ski').addClass("active").siblings().removeClass("active");
	});
	$('#hom').mouseover(function(){
		$('#se_hom').addClass("active").siblings().removeClass("active");
	});
	$('#exp').mouseover(function(){
		$('#se_exp').addClass("active").siblings().removeClass("active");
	});
	$('#pro').mouseover(function(){
		$('#se_pro').addClass("active").siblings().removeClass("active");
	});
	$('iframe').mouseover(function(){
		$('#se_con').addClass("active").siblings().removeClass("active");
	});
	$('.blog').mouseover(function(){
		$('#se_blo').addClass("active").siblings().removeClass("active");
	});
$(".carousel .first .title_head").typed({
        strings: ["Hi, My Name is Nick Kaimakis"],
        typeSpeed: 50
      });
	$(".form-control").click(function(){
		
		$(this).css({"background": "#fff"});
	});
	});
$(window).on('load',function(){'use strict';$(".loading .spinner").fadeOut();$(".loading").fadeOut();$("body").css("overflow","auto");});
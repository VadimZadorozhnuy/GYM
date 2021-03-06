$(document).ready(function(){

	$(".top_content h1, .top_content h3, .section_header").animated("fadeInDown", "fadeOutUp");
	$(".top_content h3").animated("fadeInUp", "fadeOutDown");
	$(".popup, .descr_image, .tab_img").magnificPopup({type:"image"});
	$(".animation_left").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_right").animated("fadeInRight", "fadeOutRight");
	$(".animation_zoom").animated("zoomIn", "zoomOut");

	$(function(){
		$('#mixin').mixItUp();
	});

	function autoHeight(){ //Автокорректировка размера топ-фона
		$(".main_head").css("height", $(window).height());
	};
	autoHeight();
	$(window).resize(function(){
		autoHeight();
	});

	$('.top_mnu ul a').on("click", function(){
		$('html, body').animate({scrollTop:$($(this).context.hash).position().top}, 1000);
	});
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(500).fadeOut("slow");
});

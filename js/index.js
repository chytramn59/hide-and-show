$(document).ready(function(){
	$("#about").hide();
	$("#hm").click(function(){
		debugger
		$("#about").hide();
		$("#home").show();
	});
	$("#abt").click(function(){
		debugger
		$("#home").hide();
		$("#about").show();
	});
	$("#test").click(function(){
		$("#about").show();
		$("#home").hide();
	});
	$("#add").click(function(){
		$("#about").show();
		$("#home").hide();
	});
	$("#sum").click(function(){
		$("#about").show();
		$("#home").hide();
	});
	$("#get").click(function(){
		$("#about").show();
		$("#home").hide();
	});
	$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
});

$(document).ready(function() {
	console.log("ready!");
	$(".target").click(function() {
		$(this).find(".levelblurb").slideToggle();
		$(this).siblings().find('.levelblurb').slideUp();
		//$(".target").removeClass('active');
		//$(this).toggleClass('active');
	//$(this).siblings().removeClass('active');
	});
});

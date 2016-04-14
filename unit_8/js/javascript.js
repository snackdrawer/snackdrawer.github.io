$(document).ready(function() {
	console.log("ready!");
	$(".target").click(function() {
		$(this).toggleClass('active');
	});
});

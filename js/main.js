$(document).ready(function() {
	document.title = "UniPandas";
	$(".navbar").addClass("animated bounceInDown");
	setTimeout(function() {
		$(".jumbotron, body > .container").css("opacity","1");
		$(".jumbotron, body > .container").addClass("animated zoomInLeft");
	}, 1000);
});
$(document).ready(function() {
	// variables
	// -------------------
	var screenheight = parseInt($(window).innerHeight());


	// functions
	// -------------------
	function fixNav() {
		$(".navbar").addClass("is-fixed-top");
		$("html").addClass("has-navbar-fixed-top");
	}
	function unfixNav() {
    $(".navbar").removeClass("is-fixed-top");
    $("html").removeClass("has-navbar-fixed-top");
	}


	// main logic

	$("article").click(function() {
		let projTitle = $(this).attr("data-title");
		console.log(projTitle);
		$("#details #project-title").text(projTitle);
		$(this).parents(".row").after($("#details"));
		//try appending directly to card
  });
})
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
	$(document).scroll(function() {
		console.log($(window).scrollTop(), screenheight)
		if ($(window).scrollTop() > 50) {
			fixNav();
		} else {
			unfixNav();
		}
	})
})
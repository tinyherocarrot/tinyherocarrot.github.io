$(document).ready(function() {
	// variables
	// -------------------
	var screenheight = parseInt($(window).innerHeight());


	// functions
	// -------------------
	function closeAll() {
		$("#modalChews").modal("hide");
    $("#modalQlink").modal("hide");
		$("#modalMERNNYT").modal("hide");
		$("#modalHangman").modal("hide");
		$("#navbar-menu").removeClass('show');
	}


	// main logic

	// clicking a navbar link or brand should 
	// close open modals, and close the navbar menu
	$(".nav-link").click(function() {
		closeAll();
	});
	$(".back-to-proj").click(function() {
		closeAll();
	})
	$("article").click(function() {
		let projTitle = $(this).attr("data-title");
		console.log(projTitle);
		$("#details #project-title").text(projTitle);
		$(this).parents(".row").after($("#details"));
		//try appending directly to card
  });
})
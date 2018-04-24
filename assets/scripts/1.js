$( "#table_view" ).click(function(){
	if ($(".grid_view_wrapper").css('display') !== "none") {
			$(".grid_view_wrapper").toggle();
			$(".table_view_wrapper").toggle();
			$("#grid_view").css("opacity", 1);
			$("#table_view").css("opacity", 0.4);
		};      
	});
	
$("#grid_view").click(function(){
        if ($(".table_view_wrapper").css('display') !== "none") {
			$(".table_view_wrapper").toggle();
			$(".grid_view_wrapper").toggle();
			$("#grid_view").css("opacity", 0.4);
			$("#table_view").css("opacity", 1);
		};
	});
        
$( "#table_view" ).click(function(){
	if ($(".grid_view_wrapper").css('display') !== "none") {
			$(".grid_view_wrapper").toggle();
			$(".table_view_wrapper").toggle();
		};      
	});
	
$("#grid_view").click(function(){
        if ($(".table_view_wrapper").css('display') !== "none") {
			$(".table_view_wrapper").toggle();
			$(".grid_view_wrapper").toggle();
		};
	});
        
       
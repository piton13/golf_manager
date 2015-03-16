$( document ).ready( function(){
	$("nav ul li a").on("click", function(e){
		$(this).next().toggleClass("active");
	});
	$("li[data-target='#carousel'").on("click", function(e){
		// console.log($(this).data("slide-to"));
		$(this).addClass("active").siblings().removeClass("active");
		$(".carousel-inner .item:eq("+$(this).data("slide-to")+")").addClass("on_top").siblings().removeClass("on_top");
	});
	// $(".dropdown_toggler").click().next().css("visibility", "visible");
});
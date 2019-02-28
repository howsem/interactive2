$(document).ready(function(){

	$('#item-4').mouseenter(function(){
		$(this).text("DAMN I TOLD U DON'T")
	});
	$('#item-4').mouseleave(function(){
		$(this).text("_4 DON'T HOVER")
	});

	$( "#item-6" ).mouseenter(function() {
  		$( this ).animate({ "margin-left": "+=50px" }, "slow" );
	});

	$('#item-8').mouseenter(function(){
		$(this).addClass("item-8hover");
	})

	$('#item-9').mouseenter(function(){
		$(this).text("移動光標");
	});

	$('#item-10').mouseenter(function(){
		$(this).text("_10 3/4 Please Click");
	});
	$('#item-10').mouseleave(function(){
		$(this).text("_10 HOVER")
	});















});
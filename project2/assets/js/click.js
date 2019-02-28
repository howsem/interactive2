$(document).ready(function(){

	$('#item-4').mousedown(function(){
		$('.item').addClass('round')
	});
	$('#item-4').mouseup(function(){
		$('.item').removeClass('round')
	});

	$('#item-5').mousedown(function(){
		$(this).toggleClass("item-5active")
	})



});
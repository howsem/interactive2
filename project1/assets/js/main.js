$(document).ready(function(){

	$("#tap").click(function(){
		$(this).hide();
		$(".layer").addClass("animationstarts");
	});
  	



	let square = $('.square')
	square.on({
	    mouseenter: function () {
	        $(this).find(".dots").addClass('FULL');
	    },

	    mouseleave: function () {
	        $(this).find(".dots").removeClass('FULL')
	    }
	}); 
	// reference: stackoverflow.com/questions/9827095/is-it-possible-to-use-jquery-on-and-hover
	square.click(function(){
		$(this).find(".dots").toggleClass('full')
	});
	
	let dots = $("#quote .dots:not(.full):not(.makefull)")
	let fulls = $("#quote .full")

	$("#quote .letter").click(function(){
		dots.addClass("full");
		// fulls.toggleClass("full");
	});
	
	$ ("#quote .full").on({
		mouseenter: function () {
	        $(this).removeClass('full');
	    },
	})
});











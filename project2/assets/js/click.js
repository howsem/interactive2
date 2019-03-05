$(document).ready(function(){

	$('#item-4').mousedown(function(){
		$('.item').addClass('round')
	});
	$('#item-4').mouseup(function(){
		$('.item').removeClass('round')
	});

	$('#item-5').mousedown(function(){
		$(this).toggleClass("item-5active")
	});

	$('.small').mousedown(function(){
		$(this).css("background-color","blue")
	});

	let canvas = $('.canvas');
	$('.yellow').mousedown(function(){
		canvas.css("background-color","yellow")
	});
	$('.cyan').mousedown(function(){
		canvas.css("background-color","#00FFFF")
	});
	$('.red').mousedown(function(){
		canvas.css("background-color","#FF00FF")
	});


	let click8 = $ ('#item-8')

	let clickCount = 0

	click8.mousedown(function(){

		clickCount = clickCount + 1

		if(clickCount % 3 == 0){
			$(this).css("background-color","#C23F28")	
		} else if(clickCount % 3 == 1){
			$(this).css("background-color","#FFF6D6")	
		} else {
			$(this).css("background-color","#3E77CA")
		}
		
	});

	let color = $('#item-9')
	$('.black').mousedown(function(){
		color.css("background-color","#CD5C5C")
	})
	$('.dark').mousedown(function(){
		color.css("background-color","#F08080")
	})
	$('.gray').mousedown(function(){
		color.css("background-color","#E9967A")
	})
	$('.light').mousedown(function(){
		color.css("background-color","#FFA07A")
	})

	$('#item-10').mousedown(function(){
		$('.next').addClass("nextactive")
	})
























});
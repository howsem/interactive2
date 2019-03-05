$(document).ready(function(){

	let mouseenterCount = 0
	$('#item-1').mouseenter(function(){
		mouseenterCount = mouseenterCount + 1
		if(mouseenterCount % 2 == 0){
			$(this).css('background-color','blue')
		}else {
			$(this).css('background-color','red')
		}

	})

	$('#item-6').mouseenter(function(){
		$('body').css("background-color","black")
	})
	$('#item-6').mouseleave(function(){
		$('body').css("background-color","white")
	})

	$('#item-7').mouseenter(function(){
		$('body').addClass('bodyIn')
	})
	$('#item-7').mouseleave(function(){
		$('body').addClass('bodyOut')
	})

	var mousedownCounter = 0
	$('#item-8').click(function(){
		mousedownCounter = mousedownCounter + 1
		$('#item-8').text(mousedownCounter)
	})

	$('#item-10').click(function(){
		$(this).addClass('item-10On')
	})

	$('#item-13').click(function(){
		mousedownCounter = mousedownCounter + 1
		if(mousedownCounter % 2 ==0){
			$(this).css('filter', 'grayscale(100)')
		} else {
			$(this).css('filter', 'grayscale(0)')
		}
	})

	var mousedownCounter2 = 0
	$('#item-14').click(function(){
		mousedownCounter2 = mousedownCounter2 + 1
		if(mousedownCounter2 % 2 ==0){
			$('#item-14').css('animation-play-state','paused')
		} else {
			$('#item-14').css('animation-play-state','running')
		}
	})
});
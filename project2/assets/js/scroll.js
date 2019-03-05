$(document).ready(function(){

	$('.item.dd').scroll(function(){
		$(this).toggleClass('item-3active')
	});

	$('.item.ee').scroll(function(){
		$(this).addClass('item-4active')
	});


	var position = $('.item.ff').scrollTop(); 

	$('.item.ff').scroll(function() {
	    var scroll = $('.item.ff').scrollTop();
	    if(scroll > position) {
	        $('#item-5').text('You are going up');
	    } else {
	         $('#item-5').text('You are going down');
	    }
	    position = scroll;
	});
	// reference:http://jsfiddle.net/designaroni/sj3euzL7/
	var position = $('.item.gg').scrollTop(); 

	$('.item.gg').scroll(function() {
	    var scroll = $('.item.gg').scrollTop();
	    if(scroll > position) {
	        $('#item-6').css('background-color','blue');
	    } else {
	         $('#item-6').css('background-color','red');
	    }
	    position = scroll;
	});

	$('#item-7').mousedown(function(){
		$(window).scrollTop(0);
	})

	var mousewheelCounter = 0;
	$('.item.hh').scroll(function(){

		mousewheelCounter = mousewheelCounter + 1

	  	if(mousewheelCounter % 2 ==0){
	  		$('#item-9').css('background-color','blue');
	  	} else{
			$('#item-9').css("background-color","yellow")	
		}
	})

	$('.item.ii').scroll(function(){

		mousewheelCounter = mousewheelCounter + 1
		if(mousewheelCounter > 20){
			$('.display').text('keep scrolling')
		}
		if(mousewheelCounter > 100){
			$('.display').text('')
			$('.display').append("<a href='project2_part1_cool.html'><p>you made it, click here!</p></a>")
			}





	})















});
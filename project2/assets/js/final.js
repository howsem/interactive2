$(document).ready(function(){


	let circles = []
	

	$('#instruc').click(function(){
		$(this).addClass('gone')
		setTimeout(function(){
			$("#instruc.gone").css('display','none'); 
		}, 300);
		
	})


	var xCoord,yCoord="";
  	var canvas=document.getElementById("garden");
  	var ctx=canvas.getContext("2d");

  	function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    // Resize Function Reference: https://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport

    var click=false;
    var mousedownCounter = 0

    $("#garden").mousedown(function(canvas){
    	click = true

    	let circle = {
			x:canvas.pageX-this.offsetLeft,
			y:canvas.pageY-this.offsetTop,
			blur:0
		}

    	function blurChecker(){

    		if(click){
	    		mousedownCounter = mousedownCounter + 1
	    		setTimeout(blurChecker, 100)
	    		circle.blur ++
    		}

    	}

    	setTimeout(blurChecker, 100)

    	circles.push(circle)
	
		
	});
    
    $(document).mouseup(function(){
    	click=false
    });


	function draw(){

		canvas.width = canvas.width

		for(let i = 0; i < circles.length; i++){
			
			ctx.save();
			xCoord=circles[i].x
			yCoord=circles[i].y
			
			ctx.filter = 'blur(' + circles[i].blur + 'px)';
			
			ctx.beginPath();
			ctx.arc(xCoord, yCoord, 150, 0, 2 * Math.PI);
			ctx.fill();


		}
		requestAnimationFrame(draw)

	}

	requestAnimationFrame(draw)


	




});
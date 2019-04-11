$(document).ready(function(){


	var color = 'blue'
	let circles = []
	

	let colors = [
		"blue"
		// "#FFBA4A",
		// "#60CFFC",
		// "#7E68E3",
		// "#F26DDA"
	];

	var xCoord,yCoord="";
  	var canvas=document.getElementById("garden");
  	var ctx=canvas.getContext("2d");

  	function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    

    var click=false;
    var mousedownCounter = 0

    $("#garden").mousedown(function(canvas){
    	click = true

    	let circle = {
			x:canvas.pageX-this.offsetLeft,
			y:canvas.pageY-this.offsetTop,
			blur:0,
			color:color
		}

		color = colors[Math.floor(Math.random()*colors.length)];

    	function blurChecker(){

    		if(click){
	    		mousedownCounter = mousedownCounter + 1
	    		setTimeout(blurChecker, 20)
	    		circle.blur ++
    		}

    	}

    	setTimeout(blurChecker, 20)

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
			ctx.fillStyle = circles[i].color;
			ctx.arc(xCoord, yCoord, 150, 0, 2 * Math.PI);
			ctx.fill();
		}

		requestAnimationFrame(draw)
	}

	requestAnimationFrame(draw)


	




});
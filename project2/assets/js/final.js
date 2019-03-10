$(document).ready(function(){


	var xCoord,yCoord="";
  	var canvas=document.getElementById("garden");
  	var ctx=canvas.getContext("2d");

  	function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    // Resize Function Reference: https://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport



    $("#garden").mousedown(function(canvas){
    	

		ctx.save();
		xCoord=canvas.pageX-this.offsetLeft;
		yCoord=canvas.pageY-this.offsetTop

		ctx.beginPath();
		ctx.arc(canvas.pageX-this.offsetLeft, canvas.pageY-this.offsetTop, 50, 0, 2 * Math.PI);
		ctx.fill();
	
	});
    


});
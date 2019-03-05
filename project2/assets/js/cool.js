$(document).ready(function(){

dragElement(document.getElementById("item-1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("item-1")) {
    document.getElementById("item-1").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
};
	
	var mousewheelCounter = 0;
	$('#item-2').scroll(function(){
		mousewheelCounter = mousewheelCounter + 1
      $('#item-2').css('filter','blur(' + mousewheelCounter + 'px)')
    	})




  var clic=false;
  var xCoord,yCoord="";
  var canvas=document.getElementById("drawing");
  var cntx=canvas.getContext("2d");
  cntx.strokeStyle="black";
  cntx.lineWidth=10;
  cntx.lineCap="round";
  cntx.fillStyle="#fff";
  cntx.fillRect(0,0,canvas.width,canvas.height);

  $("#drawing").mousedown(function(canvas){
      clic=true;
      cntx.save();
      xCoord=canvas.pageX-this.offsetLeft;
      yCoord=canvas.pageY-this.offsetTop
  });

  $(document).mouseup(function(){
      clic=false
  });

  $(document).click(function(){
      clic=false
  });

  $("#drawing").mousemove(function(canvas){
      if(clic==true){
          cntx.beginPath();
          cntx.moveTo(canvas.pageX-this.offsetLeft,canvas.pageY-this.offsetTop);
          cntx.lineTo(xCoord,yCoord);
          cntx.stroke();
          cntx.closePath();
          xCoord=canvas.pageX-this.offsetLeft;
          yCoord=canvas.pageY-this.offsetTop
      }
  });
              
  $("#borrador").click(function(){
      cntx.strokeStyle="#fff"
  });
  
  
  $("#limpiar").click(function(){
      cntx.fillStyle="#fff";
      cntx.fillRect(0,0,canvas.width, canvas.height);
      cntx.strokeStyle="red";
      cntx.fillStyle="red"
  })
  
  // reference:https://codepen.io/eagj/pen/wavwGR

  $('#item-4 .child').hover(function(){
    $(this).css('opacity','0');
  }, function(){
    $(this).css('opacity','100');
  })
















});
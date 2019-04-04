let dateEl = document.getElementById('date');

setInterval(function() {
  getTimeNow();
}, 1000);

let thatDay = new Date("Jun 4, 1989 00:00:01").getTime(); 

function getTimeNow(){
  
	let current = new Date();

	let howLongAgoLoadWas = current.getTime() - thatDay;

	// let d = new Date(howLongAgoLoadWas)

	var n = Math.floor(howLongAgoLoadWas / (1000 * 60 * 60 * 24));
  	var h = Math.floor((howLongAgoLoadWas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	var m = Math.floor((howLongAgoLoadWas % (1000 * 60 * 60)) / (1000 * 60));
  	var s = Math.floor((howLongAgoLoadWas % (1000 * 60)) / 1000);

    dateEl.innerText = n + "日" + h + "小時" + m + "分" + s + "秒";

	
  
}


function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;

}

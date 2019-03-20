let clockEl = document.getElementById('clock');
let dateEl = document.getElementById('date');

let logInTime = new Date();

setInterval(function() {
  getTimeNow();
}, 1000);

function months() {
  
  
}

function getTimeNow(){
	let month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";

	var weekday = new Array();
	weekday[0] =  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
  
	let current = new Date();

	let howLongAgoLoadWas = current.getTime() - logInTime.getTime()

	let pastTime = (logInTime - howLongAgoLoadWas)

	let d = new Date(pastTime)

	let y = d.getFullYear();
	let l = month[d.getMonth()];
	let w = weekday[d.getDay()];
	let n = d.getDate();
	let h = addZero(d.getHours());
	let m = addZero(d.getMinutes());
	let s = addZero(d.getSeconds());

	if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    dateEl.innerText = w + "," + " " + l + " " + n + "," + " " + y;
	clockEl.innerText = h + ":" + m + ":" + s + " " + session;
	
  
}


function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;

}

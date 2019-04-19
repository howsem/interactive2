$(document).ready(function(){

let htmlCode = document.body.innerHTML
let cssCode = document.style.innerHTML
let jsCode = document.script.innerHTML

$("#html")[0].innerText = htmlCode;
$("#css")[0].innerText = cssCode;
$("#js")[0].innerText = jsCode;


hljs.initHighlightingOnLoad();
});
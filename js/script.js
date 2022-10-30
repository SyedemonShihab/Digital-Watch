function clock () {
let hours = document.getElementById('hour');
let munites = document.getElementById('munite');
let seconds = document.getElementById('second');
let priods = document.getElementById('priod');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ampm = h >= 12 ? "pm" : "am" ;

}
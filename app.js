setInterval(function(){
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let d = new Date();
let day = days[d.getDay()];
let hr = d.getHours();
let min = d.getMinutes();

if (min < 10) {
min = "0" + min;
}
let ampm = "am";
if( hr > 12 ) {
hr -= 12;
ampm = "pm";
}
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
let x = document.getElementById("date");
x.innerHTML = day + " " + date + " " + month + " " + year;}, 1000);
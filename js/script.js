function clock() {
  let days = document.getElementById("day");
  let months = document.getElementById("month");
  let years = document.getElementById("year");

  let hours = document.getElementById("hour");
  let minuts = document.getElementById("minute");
  let seconds = document.getElementById("second");
  let priods = document.getElementById("priod");

  let d = new Date();
  let mo = new Date();
  let y = new Date();

  let h = new Date().getHours();
  let mi = new Date().getMinutes();
  let s = new Date().getSeconds();

  let ampm = h >= 12 ? "pm" : "am";

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  mi = mi < 10 ? "0" + mi : mi;
  s = s < 10 ? "0" + s : s;
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = day[d.getDay()];
  days.innerHTML = today;

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const runningMonth = month[mo.getMonth()];
  months.innerHTML = runningMonth;

  years.innerHTML = y.getFullYear();

  hours.innerHTML = h;
  minuts.innerHTML = mi;
  seconds.innerHTML = s;
  priods.innerHTML = ampm;
}
setInterval(clock, 1000);

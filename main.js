let btn = document.getElementById("btn");
let day_input = document.getElementById("day_input");
let month_input = document.getElementById("month_input");
let year_input = document.getElementById("year_input");
let years_span = document.getElementById("years_span");
let months_span = document.getElementById("months_span");
let days_span = document.getElementById("days_span");
let ps = document.querySelectorAll(".title");
let ins = document.querySelectorAll(".input input");
let notes = document.querySelectorAll(".hidden");
let dayDiv = document.getElementById("day");
let monthDiv = document.getElementById("month");
let yearDiv = document.getElementById("year");

let day, month, year;
let days, months, years;
let dateNow = new Date();

btn.addEventListener("click", () => {
  delOldValue();

  if (
    +day_input.value > 0 &&
    +day_input.value <= 31 &&
    +month_input.value > 0 &&
    +month_input.value <= 12 &&
    +year_input.value > 0 &&
    +year_input.value <= dateNow.getFullYear()
  ) {
    // clalulate age
    delClasses();
    delOldValue();

    getDifferance();

    convertSecToAge();
    displayAge();
  } else {
    // validation
    if (+day_input.value === 0) {
      ps[0].classList.add("rf");
      ins[0].classList.add("rb");
      notes[0].innerHTML = "This field is required";
    }
    if (+month_input.value === 0) {
      ps[1].classList.add("rf");
      ins[1].classList.add("rb");
      notes[1].innerHTML = "This field is required";
    }
    if (+year_input.value === 0) {
      ps[2].classList.add("rf");
      ins[2].classList.add("rb");
      notes[2].innerHTML = "This field is required";
    }
    if (+day_input.value > 31) {
      ps[0].classList.add("rf");
      ins[0].classList.add("rb");
      notes[0].innerHTML = "Must be a vaild day";
    }
    if (+month_input.value > 12) {
      ps[1].classList.add("rf");
      ins[1].classList.add("rb");
      notes[1].innerHTML = "Must be a vaild month";
    }
    if (+year_input.value > dateNow.getFullYear()) {
      ps[2].classList.add("rf");
      ins[2].classList.add("rb");
      notes[2].innerHTML = "Must be in the past";
    }
  }
});
function delOldValue() {
  years_span.innerHTML = 0;
  months_span.innerHTML = 0;
  days_span.innerHTML = 0;
  year = 0;
  month = 0;
  day = 0;
}

function getDifferance() {
  day = +day_input.value;
  month = +month_input.value;

  year = +year_input.value;

  let birthDate = new Date(`${year} ${month} ${day}`);
  diferance = dateNow - birthDate;
}
function convertSecToAge() {
  years = parseInt(diferance / 31556926000);
  months = parseInt((diferance % 31556926000) / 2629800000);
  days = parseInt(((diferance % 31556926000) % 2629800000) / 86400000);
}
function displayAge() {
  years_span.innerHTML = years;
  months_span.innerHTML = months;
  days_span.innerHTML = days;
}
function delClasses() {
  for (let i = 0; i < ps.length; i++) {
    ps[i].classList.remove("rf");
    ins[i].classList.remove("rb");
    notes[i].innerHTML = "";
  }
}

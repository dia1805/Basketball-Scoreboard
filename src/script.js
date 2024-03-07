let homeCount = document.getElementById("home-count");

let guestCount = document.getElementById("guest-count");

let count = 0;

function plus1H () {
  count = +homeCount.textContent;
  homeCount.textContent = count + 1;
}

function plus2H () {
  count = +homeCount.textContent;
  homeCount.textContent = count + 2;
}

function plus3H () {
  count = +homeCount.textContent;
  homeCount.textContent = count + 3;
}

function plus1G () {
  count = +guestCount.textContent;
  guestCount.textContent = count + 1;
}

function plus2G () {
  count = +guestCount.textContent;
  guestCount.textContent = count + 2;
}

function plus3G () {
  count = +guestCount.textContent;
  guestCount.textContent = count + 3;
}

function resetH () {
  homeCount.textContent = 0;
}

function resetG () {
  guestCount.textContent = 0;
}
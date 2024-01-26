const counter = document.querySelector("#visitCounter");

let visits = Number(localStorage.getItem("wdd230HomeVisits")) || 0;
counter.innerHTML = visits;
visits++;
localStorage.setItem("wdd230HomeVisits", visits)

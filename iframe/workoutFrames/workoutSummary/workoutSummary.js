const summary = document.getElementById("summary");

const date = new Date();

let day = date.getDate();
let year = date.getFullYear();
let month = date.getMonth();
summary.innerText = summary.innerText + "Data: " + day + "/" + month + "/" + year + "\n";
summary.innerText = summary.innerText + "Activity: " + sessionStorage.getItem("current") + "\n";
let dist = parseFloat(sessionStorage.getItem("dist"));

summary.innerText = summary.innerText + "Distance: " + dist.toFixed(1) + " Km\n";
summary.innerText = summary.innerText + "Calories Lost: " + sessionStorage.getItem("cal") + "\n";

let bpm = parseFloat(sessionStorage.getItem("bpm"));
summary.innerText = summary.innerText + "Average bpm: " + bpm.toFixed(2) + "\n";

const next = document.getElementById("next");

next.addEventListener("click", () => {
    document.location.href = "../workoutMain/workoutMain2.html";
});

// const left = document.getElementById("left");

// left.addEventListener("click", () => {
//     let s = summary.outerHtml;
//     sessionStorage.setItem("summary", s);
//     summary.innerHTML = "<img src = 'bpmSummary' id='graph'>"
// });







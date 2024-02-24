const right = document.getElementById("right");
const left = document.getElementById("left");

var index = 0;
sessionStorage.setItem("current", "Run");
const activities = ["Run", "Walk", "Cycling"];
// const activitiesL= ["Run", "Cycling", "Walk"];

right.addEventListener("click", () => {
    const curr = document.getElementById("current");
    index = (index + 1) % activities.length;
    curr.innerHTML = activities[index];

    const imagem = document.getElementById("icon");
    let s = activities[index] + ".png"
    imagem.src = s;

    sessionStorage.setItem("current", activities[index]);
});

left.addEventListener("click", () => {
    const curr = document.getElementById("current");
    if(index === 0) {
        index = activities.length - 1;
    } else {
        index = index-1;
    }
    curr.innerHTML = activities[index];

    const imagem = document.getElementById("icon");
    let s = activities[index] + ".png"
    imagem.src = s;

    sessionStorage.setItem("current", activities[index]);
});

const options = document.getElementById("options");

options.addEventListener("click", () => {
    if(sessionStorage.getItem("current") !== null) {
        sessionStorage.setItem("previous", sessionStorage.getItem("current"));
    }
    document.location.href = "../workoutMain/workoutMain2.html";
});

const ret = document.getElementById("return");

ret.addEventListener("click", () => {
    let s = sessionStorage.getItem("previous");
    sessionStorage.setItem("current", s)
    document.location.href = "../workoutMain/workoutMain2.html"
})
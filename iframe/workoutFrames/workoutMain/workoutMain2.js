const back = document.getElementById("return");

back.addEventListener("click", () => {
    document.location.href = "../../mainMenu/mainMenu.html"
});

const left = document.getElementById("left");

left.addEventListener("click", () => {
    sessionStorage.setItem("current", start.innerHTML);
    document.location.href = "../workout/workout.html";
});

const right = document.getElementById("right");

right.addEventListener("click", () => {
    // prompt("select");
    document.location.href = "../selectWorkout/selectWorkout.html"
});

//-----------------------------------------------------------------------------------

window.onload = function() {
    deleteStuff();
    const start = document.getElementById("start");
    start.innerHTML = "Run";
    // sessionStorage.setItem("previous", "Run");
    let s = sessionStorage.getItem("current");
    if(s !== null && s !== "null") {
        start.innerHTML = s;
    }
    if(s == "Cycling") {
        start.style.left = "-15px";
    } else {
        start.style.left = "5px"
    }
};

function deleteStuff() {
    sessionStorage.removeItem("dist");
    sessionStorage.removeItem("cal");
    sessionStorage.removeItem("currentbpm");
    sessionStorage.removeItem("min");
    sessionStorage.removeItem("sec");
}

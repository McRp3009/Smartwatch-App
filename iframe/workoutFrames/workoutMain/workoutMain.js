const back = document.getElementById("return");

back.addEventListener("click", () => {
    document.location.href = "../mainMenu/mainMenu.html"
});

const select = document.getElementById("selectWorkout");

select.addEventListener("click", () => {
    sessionStorage.setItem("previous", start.innerHTML )
    document.location.href = "../selectWorkout/selectWorkout.html"
});

const start = document.getElementById("startWorkout");

start.addEventListener("click", () => {
    document.location.href = "../workout/workout.html";
});

//-----------------------------------------------------------------------------------

window.onload = function() {
    start.innerHtml = "Run";
    let s = sessionStorage.getItem("current");
    if(s === null) {
        return;
    } else {
        start.innerHTML = s;
    }
};


document.addEventListener("swiped-right", function() {
    prompt("yooooo");
    document.location.href = "../mainMenu/mainMenu.html";
});
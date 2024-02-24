const save = document.getElementById("save");

save.addEventListener("click", () => {
    let totalLost = sessionStorage.getItem("calories_lost");
    let lost = sessionStorage.getItem("cal");
    let novo = parseInt(lost) + parseInt(totalLost);
    sessionStorage.setItem("calories_lost", novo);
    document.location.href = "../workoutSummary/workoutSummary.html";
});

const discard = document.getElementById("discard");
discard.addEventListener("click", () => {
    document.location.href = "../workoutMain/workoutMain2.html";
});

const ret = document.getElementById("return");
ret.addEventListener("click", () => {
    document.location.href = "../pausedWorkout/pausedWorkout.html";    
});
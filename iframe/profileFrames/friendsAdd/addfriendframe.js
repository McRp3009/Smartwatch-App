const back = document.getElementById("return");

back.addEventListener("click", () => {
    document.location.href = "../friendsList/friendsframe.html"
});

const left = document.getElementById("left");

const right = document.getElementById("right");

right.addEventListener("click", () => {
    // prompt("select");
    document.location.href = "../proxAdd/proxAdd.html"
});

const id = document.getElementById("startWorkout");

id.addEventListener("click", () => {
    document.location.href = "../teclado/teclado.html";
})

//-----------------------------------------------------------------------------------
const screen = document.getElementById("screen");

const take = document.getElementById("take");

take.addEventListener("click", () => {
    document.location.href = "../caloriesPhoto/caloriesPhoto.html";
});

const ret = document.getElementById("return");

ret.addEventListener("click", () => {
    document.location.href = "../caloriesMain/caloriesMain.html"
});

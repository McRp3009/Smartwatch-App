const ret = document.getElementById("return");

ret.addEventListener("click", () => {
    document.location.href = "../mainMenu/mainMenu.html"
});

window.onload = function() {
    const calGained = document.getElementById("t2");
    calGained.innerText = "Calorias consumidas: " + sessionStorage.getItem("calories_gained");
    const calLost = document.getElementById("t3");
    calLost.innerText = "Calorias gastas: " + sessionStorage.getItem("calories_lost");
};
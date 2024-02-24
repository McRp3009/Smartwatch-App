const data = document.getElementById("data");
window.onload = function() {
    const date = new Date();

    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth(); 
    data.innerText = "Data: " + day + "/" + month + "/" + (year % 100);
};

const cancel = document.getElementById("cancel");

cancel.addEventListener("click", () => {
    document.location.href = "../caloriesTake/caloriesTake.html";
});

const next = document.getElementById("ok");

next.addEventListener("click", () => {
    let calGained = parseInt(sessionStorage.getItem("calories_gained"));
    calGained += 275;
    sessionStorage.setItem("calories_gained", calGained);
    sessionStorage.setItem("dateFood", data.innerText );
    sessionStorage.setItem("caloriesAdd", "275cal");
    document.location.href = "../caloriesMain/caloriesMain.html";
})
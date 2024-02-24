const right = document.getElementById("right");
const left = document.getElementById("left");

var index = 0;

window.onload = function() {
    if(sessionStorage.getItem("food") === null) {
        sessionStorage.setItem("food",["Data: 11/6/22 237cal", "Data: 12/6/22 235cal", "Data: 14/6/22 241cal"]);
    }

    if(sessionStorage.getItem("caloriesAdd") !== null) {
        let s = sessionStorage.getItem("dateFood") + " " + sessionStorage.getItem("caloriesAdd");
        addFood(s);
        sessionStorage.removeItem("caloriesAdd");         
    }
};

function addFood(s) {
    let f = sessionStorage.getItem("food");
    const food = f.split(",");
    food.push(s);
    sessionStorage.setItem("food", food);
}

right.addEventListener("click", () => {
    let f = sessionStorage.getItem("food");
    const food = f.split(",");
    const curr = document.getElementById("current");
    index = (index + 1) % food.length;
    curr.innerText = food[index];

    const imagem = document.getElementById("icon");
    let s = index + ".png"
    if(index >= 3) {
        s = "toAdd.png";
    }
    imagem.src = s;

    // sessionStorage.setItem("currentF", foodR[index]);
});

left.addEventListener("click", () => {
    let f = sessionStorage.getItem("food");
    const food = f.split(",");
    const curr = document.getElementById("current");
    if(index === 0) {
        index = food.length - 1;
    } else {
        index = index-1;
    }
    curr.innerText = food[index];

    const imagem = document.getElementById("icon");
    let s;
    if(index >= 3) {
        s = "toAdd.png";
    } else {
        s = index + ".png"
    }
    imagem.src = s;

    // sessionStorage.setItem("currentF", activitiesL[index]);
});

const ret = document.getElementById("return");

ret.addEventListener("click", () => {
    // let s = sessionStorage.getItem("previous");
    // sessionStorage.setItem("current", s)
    document.location.href = "../../mainMenu/mainMenu.html"
});

const add = document.getElementById("add");

add.addEventListener("click", () => {
    document.location.href = "../caloriesConnect/caloriesConnect.html"
});
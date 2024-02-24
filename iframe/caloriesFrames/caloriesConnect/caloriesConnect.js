// import { setTimeout } from "timers/promises";

const screen = document.getElementById("screen");
const connect = document.getElementById("connect_phone");

window.onload = function() {
    connect.innerHtml = "60px";
    connect.style.border = "1px solid #ff7f27";
    connect.style.top = "";
    let p = document.createElement("p");
    p.id = "text";
    p.innerText = "Connect to Phone";
    connect.appendChild(p);
    let c = document.createElement("div");
    c.id = "circle";
    let ret = document.createElement("img");
    ret.src = "../../return3.png";
    ret.id = "return";
    c.appendChild(ret);
    screen.appendChild(c);
    c.addEventListener("click", () => {
        document.location.href = "../caloriesMain/caloriesMain.html";
    })
};

connect.addEventListener("click", loading);

function loading() {
    let c = document.getElementById("circle");
    screen.removeChild(c);
    connect.removeEventListener("click", loading);
    connect.innerHTML = "";
    connect.style.border = "0px solid white";
    connect.style.top = "72px";
    let p1 = document.createElement("p");
    p1.id = "p1";
    p1.innerText = "Connecting \n \n to phone"
    let d = document.createElement("div");
    d.classList.add("progress");
    connect.appendChild(p1);
    connect.appendChild(d);

    setTimeout(function() {
        document.location.href = "../caloriesTake/caloriesTake.html";
        // connect.innerHTML = "";
        //TODO screen that says take photo with your phone
        // document.location.href = "../caloriesPhoto/caloriesPhoto.html";
    }, 5000);

    // connect.innerHTML = "";
    // let p2 = document.createElement("p");
    // p2.id = "p2";
    // p2.innerText = "Take photo with \nyour phone and\n submit it";
};
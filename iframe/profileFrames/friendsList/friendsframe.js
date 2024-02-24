const right = document.getElementById("right");
const left = document.getElementById("left");

var index = 0;

window.onload = function() {
    if(sessionStorage.getItem("friendAdd") !== null) {
        let f = sessionStorage.getItem("friendAdd");
        addFriend(f);
        sessionStorage.removeItem("friendAdd");
    }

    if(sessionStorage.getItem("friends") === "") {
        document.location.href = "../noFriends/noFriends.html";
        return;
    }

    const curr = document.getElementById("current");
    let names = sessionStorage.getItem("friends").split(",");
    current.innerText = names[0];

    const icon = document.getElementById("icon");

    icon.src = names[0] + ".png";
};

function addFriend(s) {
    if(sessionStorage.getItem("friends") === "") {
        sessionStorage.setItem("friends", [s]);
    } else {
        let f = sessionStorage.getItem("friends");
        const friends = f.split(",");
        friends.push(s);
        sessionStorage.setItem("friends", friends);
    }
}

right.addEventListener("click", () => {
    let f = sessionStorage.getItem("friends");
    const friends = f.split(",");
    const curr = document.getElementById("current");
    index = (index + 1) % friends.length;
    curr.innerText = friends[index];

    const imagem = document.getElementById("icon");
    let s = friends[index] + ".png"
    if(index > 1) {
        s = "default.png";
    }
    imagem.src = s;

    // sessionStorage.setItem("currentF", foodR[index]);
});

left.addEventListener("click", () => {
    let f = sessionStorage.getItem("friends");
    const friends = f.split(",");
    const curr = document.getElementById("current");
    if(index === 0) {
        index = friends.length - 1;
    } else {
        index = index-1;
    }
    curr.innerText = friends[index];

    const imagem = document.getElementById("icon");
    let s;
    if(index >= 3) {
        s = "defaultFriend.png";
    } else {
        s = friends[index] + ".png"
    }
    imagem.src = s;

    // sessionStorage.setItem("currentF", activitiesL[index]);
});

const ret = document.getElementById("return");

ret.addEventListener("click", () => {
    document.location.href = "../profileMain/profileframe.html"
});

const add = document.getElementById("add");

add.addEventListener("click", () => {
    document.location.href = "../friendsAdd/addfriendframe.html"
});

const options = document.getElementById("options");

options.addEventListener("click", () => {
    loadFriendProfile();
})

function loadFriendProfile() {
    var curr = document.getElementById("current");
    let c = curr.innerText;

    var friendId = sessionStorage.getItem("friendsId");
    let fId = friendId.substring(index*7, index*7 + 6);

    sessionStorage.setItem("pName", c);
    sessionStorage.setItem("pId", fId);

    sessionStorage.setItem("indexF", index);

    document.location.href = "../friendProfile/friendProfile.html";
}
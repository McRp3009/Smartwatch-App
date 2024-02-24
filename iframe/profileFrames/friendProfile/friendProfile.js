const ret = document.getElementById("return");

ret.addEventListener("click", () => {
    document.location.href = "../friendsList/friendsframe.html";
});

// -------------------------------------

window.onload = function() {
    const name = document.getElementById("name");
    name.innerText = "Name: " + sessionStorage.getItem("pName");
    const id = document.getElementById("id");
    id.innerText = "ID: " + sessionStorage.getItem("pId");

    const pfp = document.getElementById("pfp");

    pfp.src = sessionStorage.getItem("pName") + ".png"
};

const remove = document.getElementById("remove");

remove.addEventListener("click", () => {
    removeFriend();
})

function removeFriend() {
    var index = sessionStorage.getItem("indexF");
    let friendsId = sessionStorage.getItem("friendsId").split(",");
    let friendsName = sessionStorage.getItem("friends").split(",");

    let idIndex = friendsId.indexOf(sessionStorage.getItem("pId"));
    friendsId.splice(idIndex, 1);
    let nameIndex = friendsName.indexOf(sessionStorage.getItem("pName"));
    friendsName.splice(nameIndex, 1);

    sessionStorage.setItem("friendsId", friendsId);
    sessionStorage.setItem("friends", friendsName);

    // var check = sessionStorage.getItem("friends");

    // if(sessionStorage.getItem("friends") === "") {
    //     document.location.href = "";
    // }

    document.location.href = "../friendsList/friendsframe.html"
}
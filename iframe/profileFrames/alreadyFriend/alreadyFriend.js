window.onload = function() {
    const id = document.getElementById("id");
    id.innerText = sessionStorage.getItem("idAdd");
}

const ret = document.getElementById("return");

ret.addEventListener("click", () => {
    document.location.href = "../friendsAdd/addfriendframe.html"
})
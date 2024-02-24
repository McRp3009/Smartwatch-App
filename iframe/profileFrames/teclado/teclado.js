var counter = 0;
var id = "";

const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");
const t5 = document.getElementById("t5");
const t6 = document.getElementById("t6");
const t7 = document.getElementById("t7");
const t8 = document.getElementById("t8");
const t9 = document.getElementById("t9");
const t0 = document.getElementById("t0");
const enter = document.getElementById("enter");
const del = document.getElementById("delete");

const ret = document.getElementById("return");

ret.addEventListener("click", () => {
    document.location = "../friendsAdd/addfriendframe.html";
})

t1.addEventListener("click", () => {
    writeNum(1);
});

t2.addEventListener("click", () => {
    writeNum(2);
});

t3.addEventListener("click", () => {
    writeNum(3);
});

t4.addEventListener("click", () => {
    writeNum(4);
});

t5.addEventListener("click", () => {
    writeNum(5);
});

t6.addEventListener("click", () => {
    writeNum(6);
});

t7.addEventListener("click", () => {
    writeNum(7);
});

t8.addEventListener("click", () => {
    writeNum(8);
});

t9.addEventListener("click", () => {
    writeNum(9);
});

t0.addEventListener("click", () => {
    writeNum(0);
});

del.addEventListener("click", () => {
    deleteLast();
})

enter.addEventListener("click", () => {
    enterId();
})

function writeNum(x) {

    if(counter == 6) {
        return;
    } else {
        counter++;
        let s = "i" + counter;
        const toWrite = document.getElementById(s);
        toWrite.innerText = x;
        id = id + "" + x;
        console.log(id);
    }
}

function deleteLast() {
    if(counter == 0) {
        return;
    } else {
        let s = "i" + counter;
        const toDelete = document.getElementById(s); 
        toDelete.innerText = "";
        counter--;
        id = id.slice(0,-1);
        console.log(id);
    }
}

function enterId() {

    if(counter == 6) {
        sessionStorage.setItem("idAdd", id);
        var fId;
        if(sessionStorage.getItem("friendsId") !== null) {
            var fId = sessionStorage.getItem("friendsId");
            if(fId.includes(id)) {
                document.location.href = "../alreadyFriend/alreadyFriend.html";
                console.log("already friend");
                return;
            }
            var newfId;
            if(fId === "") {
                newfId = sessionStorage.getItem("idAdd");
                // console.log(new)
            } else {
                newfId = fId + "," + sessionStorage.getItem("idAdd");
            }
            sessionStorage.setItem("friendsId", newfId);
        } else {
            let id = sessionStorage.getItem("idAdd")
            sessionStorage.setItem("friendsId", [id]); 
        }
        document.location.href = "../friendConfirm/friendConfirm.html";
    }

}


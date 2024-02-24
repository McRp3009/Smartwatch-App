window.onload = prox();

const screen = document.getElementById("screen");

function prox() {
    setTimeout(function() {
        let rId = getIdRandom();
        sessionStorage.setItem("idAdd", rId);
        var fId = sessionStorage.getItem("friendsId");
            if(fId.includes(rId)) {
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
        document.location.href = "../friendConfirm/friendConfirm.html";      
    }, 5000);
}

function getIdRandom() {

    let id = "";

    while(id.length < 6) {

        let i = randomIntFromInterval(0, 9);
        id = id + i;

    }

    return id;
    
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
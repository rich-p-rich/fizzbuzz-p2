document.getElementById("how-to-play").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("game-rules").classList.toggle("show");
}

let randomNum = Math.floor((Math.random() * 10) + 1);

// show / hide rules button //
document.getElementById("how-to-play").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("game-rules").classList.toggle("hide");
}

// generate the Fizz and Buzz numbers //
function Random() {
    var rnd = Math.floor(Math.random() * 8) + 2;
    document.getElementById('tb').value = rnd;
}
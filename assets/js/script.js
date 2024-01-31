// show / hide rules button //
document.getElementById("how-to-play").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("game-rules").classList.toggle("hide");
}

// generate the Fizz and Buzz numbers //
function myFunction() {
    FizzNumber = Math.floor(Math.random() * 8) + 2;
    document.getElementById("fizz-number").innerHTML = FizzNumber;
    BuzzNumber = Math.floor(Math.random() * 8) + 2;
    document.getElementById("buzz-number").innerHTML = BuzzNumber;
}
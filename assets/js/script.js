// show / hide the 'How the games works' section //
document.getElementById("how-to-play").addEventListener("click", showHideGameplay);
function showHideGameplay() {
    document.getElementById("game-rules").classList.toggle("hide");
}

// generate the Fizz and Buzz numbers //
document.getElementById("ready-fizzbuzz").addEventListener("click", readyFizzBuzz);
function readyFizzBuzz() {
    FizzNumber = Math.floor(Math.random() * 8) + 2;
    document.getElementById("fizz-number").innerHTML = FizzNumber;
    BuzzNumber = Math.floor(Math.random() * 8) + 2;
    document.getElementById("buzz-number").innerHTML = BuzzNumber;
}

// generate the sequence of Target numbers //
document.getElementById("set-target-numbers").addEventListener("click", setTargetNumbers);
function setTargetNumbers () {
    TargetNumbers = Math.floor(Math.random()*100) + 3; 
    document.getElementById("target-number").innerHTML = TargetNumbers; 
}

//allow only one answer in the checkbox//
function selectOnlyThis(id){
    var myCheckboxAnswer = document.getElementsByName("checkbox-answer");
    Array.prototype.forEach.call(myCheckboxAnswer,function(el){
      el.checked = false;
    });
    id.checked = true;
  }

//calculate the correct answer and check user input//
function checkAnswer () {
        let userAnswer = parseInt(document.getElementsByName("answer").checked);    
        let checkedAnswer = calculateCorrectAnswer();
        let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Correct!");
    } else {
        alert("Incorrect!")
    }

    runGame(calculatedAnswer[1]);
}
    
//checks what the right answer should be// 

function calculateCorrectAnswer() {

    let TargetNumbers = document.getElementById("target-number").value;
        TargetNumbers = parseInt (TargetNumbers);

        let fizzCheckbox = document.getElementById("Fizz").checked;
        let buzzCheckbox = document.getElementById("Buzz").checked;
        let noCheckedbox = document.getElementById("No!").checked;
        let fizzBuzzCheckbox = document.getElementById("FizzBuzz").checked;

    if (fizzCheckbox) {
        if (targetNumber % fizzNumber === 0) {
            document.getElementById("checkbox").innerText = "Correct!";
        } else {
            document.getElementById("checkbox").innerText = "Incorrect!";}
        }    

    if (buzzCheckbox) {
        if (targetNumber % buzzNumber === 0) {
            document.getElementById("checkbox").innerText = "Correct!";
        } else {
            document.getElementById("checkbox").innerText = "Incorrect!";}
        }
        
        
    if (noCheckedbox) {
        if (targetNumber % fizzNumber !== 0 && targetNumber % buzzNumber !== 0 && targetNumber % fizzBuzz !== 0) {
                document.getElementById("checkbox").innerText = "Correct!";
            } else {
                document.getElementById("checkbox").innerText = "Incorrect!";}
        }
    
    if (fizzBuzzCheckbox) {
        if (targetNumber % fizzNumber === 0 && targetNumber % buzzNumber === 0) {
                    document.getElementById("checkbox").innerText = "Correct!";
            } else {
                    document.getElementById("checkbox").innerText = "Incorrect!";
            }                   
    }}

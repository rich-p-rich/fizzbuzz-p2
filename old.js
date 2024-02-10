<!--User inputs answers via the multiple choice buttons-->
            <div id="user-answers" class="answer-btns">
                <div class="button-container-1">
                    <button data-type="fizz" id="fizz-btn" class="answerButtons" onclick="getUserAnswer(event)">Fizz
                    </button>
                    
                    <button data-type="fizzbuzz" id="fizzbuzz-btn" class="answerButtons"
                        onclick="getUserAnswer(event)">FizzBuzz</button>
                </div>
                <div class="button-container-2">
                    <button data-type="buzz" id="buzz-btn" class="answerButtons" onclick="getUserAnswer(event)">Buzz
                    </button>
                    <button data-type="no" id="no-btn" class="answerButtons" onclick="getUserAnswer(event)">No!
                    </button>
                </div>
            </div>

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-weight: 500;
font-size: 25px;
border: none;
height: 100px;
width: 150px;
font-size: 20px;
padding: 7.5px 16px;
margin: 20px;
margin-top:20px;
margin-bottom:20px;
}


grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
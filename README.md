## Project Two: FizzBuzz

For Project Two I have created a multiple choice version of the maths game "FizzBuzz." In its traditional form, you choose two base numbers, one called 'Fizz' and one called Buzz; then, if for example your Fizz number was 3, and your Buzz number was 5, you would proceed to count, saying Fizz for every multiple of 3, Buzz for every multiple of 5, and FizzBuzz for every number that is a multiple of both.  

I took the idea from a Tom Scott video called "FizzBuzz: One Simple Interview Question" (https://www.youtube.com/watch?v=QPZ0pIK_wsc). I have been teaching English to computer scientists at the Deggendorf Institute of Technology (the DIT) since April 2020, and this is one of the videos I use in class. 

I have always enjoyed this video, in particular the emphasis he puts on making the code easy to read, change and maintain; I worked in E-commerce in a previous career, and one of the shops I worked for used legacy code for its platform which was extremely difficult and time-consuming to maintain and update, making any changes painful and costly; we had IT releases every second Monday and they invariably caused significant problems, including loss of sales. Additionally, I taught essay and writing skills to history undergraduates at UCL in the UK when I was still living there, and do a similar job here at the DIT in Germany, so the value Tom attaches to clear and direct code-writing, without repetition, resonated with me. 

FizzBuzz therefore seemed like a natural fit for Project 2, not least because, in the above video, Tom writes his solution in Javascript, and this was my chance to actually try out different ways to solve this question. However, the setting for my version of the game is quite different to that shown in the video, which demonstrates a 'one-time' solution to coding the FizzBuzz problem in a job interview setting. In contrast, I wanted to turn it into an interactive online game. I wanted the avoid asking the user to type in numbers, and asking the user to count in a linear manner per the traditional form of the game did not seem very promising. 

I therefore made a multiple choice game in which:
- the Fizz and Buzz numbers stay constant for the duration of the game 
- each Target Number represents a new question, and so the player constantly gets new Target Numbers for as long as they are playing the game 
- the player chooses from four options to answer the question: Fizz and Buzz, as outlined above
- in addition, the player can choose 'No' when the Target number cannot be divided by either Fizz or Buzz
- the player can also choose 'FizzBuzz' as an option when the Target Number can be divided by both the Fizz and Buzz numbers.  


I have tried to design it so that anyone who can read and operate a mobile phone / web-browser can play the game; it would work well for children / young teenagers who want to practise their maths, but I think it works well for people of all ages.  

## Orientation

- I have followed the 'mobile first' principle when designing this game. My first concern was that it presented and functioned well on mobiles, then on laptops and desktops. I think this is realistic - this is the type of game someone would play on their mobile device, even though it works fine on laptops / desktops. 

- Audience. I have in mind anyone who wants to practise their maths skills, and I imagine this would work well as a game for kids and teenagers to practise division and multiplication. For that reason, I have kept the gameplay as simple as possible and kept the amount of text to a minimum; additionally, I have tried to keep the text divided up into small chunks. In essence, anyone of any age can play it, and anyone with limited English skills can play it too.

## Features

**Navigation Bar**
- In the header you can find a button called 'click here for how it works.' By clicking this button, you can display an explanation of the gameplay and scoring, plus an example game. 
I included this via a toggle feature so that the player does need to switch pages to look at the rules - so no extra page is needed - nor does the player need to have the rules constantly visible, which would take up valuable screen space. I also thought that having the rules constantly open would be off-putting for first-time visitors.  

Initially I had the rules in a separate clickable button underneath the header and above the 'Ready FizzBuzz' button, but after testing this on my mobile, I decided this was a taking up too much space: it was forcing the 'Reset Scores' button down out of view, so I decided to embed it in the header itself. 

**Page Layout and Style** 
- I have deliberately kept things simple, reflecting the simple nature of the game. I experimented with different background colours and styles, but settled on a plain white background with the buttons in primary colours; the text in the buttons is white as this shows up best against the colour of the buttons.  

- Colour choice. The use of primary colours in the page is also a nod to the probability that the real-life audience of this game would consist of children.  

- Vertical alignment. Give that this would probably be played on mobile or tablet devices, I felt that a vertical alignment works best to avoid any confusion. The player goes intutitively from 'Ready FizzBuzz' to 'Set Target Number'; this reveals the answer options below, and the player can choose the next Target Number, see their scores, or re-set their scores by following a simple vertical line.  



## Functionality per Button

**Ready FizzBuzz**
- This button generates the Fizz and Buzz numbers you need to play the game. 
- I have limited the numbers to between 2 and 9 for this version of the game
- Both numbers are deliberately different to each other, as otherwise there is no point having both 'Fizz' and 'Buzz'.
- In future versions of the game, I would like to include more difficult FizzBuzz numbers, e.g. 11 - 100 and above by allowing the user to choose a more difficult level.

*Additional functionality*
- This is one of the two buttons which needs to be clicked in order to make the answer section visible. The other is the 'Set Target Number' button.  
- This button also re-sets the score to zero. If the player changes the FizzBuzz numbers, they are essentially starting a new game, which is why I added the 'reset scores' function to this button as well.  

**Set Target Number**
- This button generates the first target number, which is limited to between 10 and 100.  
- By clicking on this button as well as the Ready FizzBuzz button, the answer buttons will be revealed.  
- The player can also choose another Target Number if they don't like the one given to them; this does not re-set the scores.  

*Additional functionality*
- The player can also generate a new Target Number by clicking on 'Set Target Number' as I saw no reason to restrict this functionality to only 'Next Target Number.'  

**Answer Section and Feedback Section** 

- Hiding the answer buttons. I have deliberately kept the answer buttons hidden until the user has clicked on Ready FizzBuzz and Set Target number. As the FizzBuzz and Target Numbers are essential for playing the game, it made sense to compel the player to click on them. I considered greying out the answer buttons as a sign to the player that the answers are not yet enabled, but decided that this would raise more questions in the player's mind. So I choise to hide them completely. This gives the player no choice but to follow the directions given by the 'Ready' FizzBuzz and 'Set' Target Number buttons.    

- Naming the answer buttons. I deliberately used the imperative forms of 'Ready' and 'Set' because it is telling the user what to do; it also nicely echoes the instructions given at the start of a race so the sequence of operations should feel more intuitive. 

**Choosing the answer** 

- The player can only click one button, one time, per Target Number  
- By clicking on any of the four options, the player gives their answer and immediately sees underneath the answer buttons if it was correct or incorrect  
- A this point, the answer buttons are no longer clickable 
- The player needs to click on 'New Target Number' (or 'Set Target Number') to make the answer buttons clickable again
- The feedback sentence 'Your answer was Correct / Incorrect' is deliberately between the answers and the 'Next Target Number' button to reflect the player's process -> answer question, find out if it was right, next question.  

**Layout and Style of Answer Buttons**
- I went with four vertically-stacked buttons as I thought it was important to have space between them to avoid players mistakenly clicking on the wrong button, e.g. 'No' rather than 'FizzBuzz' 
- The vertical design also suits the narrower mobile screen 
- I put 'No!' at the bottom because it is the most common answer, so having it next to the 'Next Target Number' button makes the most sense, ergonomically.  
- The answer buttons have a deliberately different style to the other buttons on the screen in order to differentiate them and identify them as special.  

**Next Target Number**
- This button generates the next target number and, by doing so, enables the answer buttons again.  
- I added this button so the user doesn't have to move up above the answer buttons again
- Also the description 'Next Target Number' is more accurate here than 'Set Target Number', because the player already has set a Target Number -> they just need a new one. 

**User feedback**
- This keeps a count of the number of correct and incorrect answers the user has submitted.
- This is based closely on the function used in the LoveMaths walk-through project on the CodeInstitute. I could not find a better way of doing it so adapted it to my game. I have noted this on in the code itself with a comment above the 'countCorrect' function.
- In a more advanced iteration of this game, I would like the user to be able to add their username in a scoreboard; or in a timed game, this would show 'X number of correct answers in 60 seconds.'  


**Reset Score**
- This button sets the number of correct / incorrect scores to zero in case the user wants to do this. 
- The score will also be reset when the user generates a new set of FizzBuzz numbers.  

## Features Left to Implement

To be completed 

## Validator Testing 
HTML. I used https://validator.w3.org/#validate_by_input by direct input to test the HTML. There are no remaining errors.  

CSS. I used https://jigsaw.w3.org/css-validator/validator by direct input to test the CSS. There are no remaining errors.  

I used https://jshint.com/ to test my javascript. The only remaining feedback I have is the comment that 'getUserAnswer is an 'unsed variable'. However, it refers to the 'onclick' attribute 'getUserAnswer' in the HTML which I used to capture the user's answer. I have also made this comment in my JS code.  

## Lighthouse Testing 


## Testing: appearance and functionality
- Testing done on Chrome, Firefox, Samsung Internet version 23.0.1.1 on a Samsung A33.
- Mobile testing included portrait and landscape views.
- Link used: https://rich-p-rich.github.io/fizzbuzz-p2/
- Also used for testing: Chrome Dev tools

Add table 

## Notable challenges and bugs (fixed)

## Unfixed Bugs

## Deployment

I deployed the site to GitHub pages for the first time on 31.01.2024. I followed the steps outlined in the guidance:

- From the GitHub repository -> Settings tab
- Select pages
- Set source to 'Deploy from Branch'
- Select main folder
- Folder set to / (root)

The live link can be found here - <https://rich-p-rich.github.io/beekeeping-with-honey-bees-p1/>

## Credits

- Thank you to my mentor Dick Vlaanderen for valuable support and advice.
- Thank you to the tutoring service  

### Coding help:











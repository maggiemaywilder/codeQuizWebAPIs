// Variables - buttons
var startBtn = document.getElementById("start"); 
var q = document.querySelector("#question");
var a = document.querySelector("#A");
var b = document.querySelector("#B");
var c = document.querySelector("#C");
var d = document.querySelector("#D");
// Do I need to change btns to submit? https://www.w3schools.com/html/html_forms.asp
var timer = document.querySelector("#timer");
var countdown = document.querySelector("#countdown");
var timeLeft = 90, reset; // what is the reset part?
var Score;
var response = document.querySelector("#response");
var pick;
var check;
var currentQ = 0;

// Variables - cards
var startScreen = document.querySelector("#home");
var quizScreen = document.querySelector("#quiz");
var initialsScreen = document.querySelector("#inputInitials")
var scoreScreen = document.querySelector("#scores");

// Arrays
var questions = [
    ["A very useful tool used during development and debugging for printing content to the debugger is:","Javascript","incorrect","terminal/bash","incorrect","for loops","incorrect","console.log","correct"],
    ["Commonly used data types DO NOT include:","strings","incorrect","booleans","incorrect","alerts","correct","numbers","incorrect"],
    ["What is the answer to life, the universe, and everything?","pizza","incorrect","42","correct","love","incorrect","money","incorrect"],
    ["The condition in an if/else statement is enclosed within ______.","quotes","incorrect","curly brackets","incorrect","parentheses","correct","square brackets","incorrect"],
    ["Arrays in JavaScript can be used to store _______","numbers and strings","incorrect","other arrays","incorrect","booleans","incorrect","all of the above","incorrect"],
    ["String values must be enclosed within _____ when being assigned to variables.","commas","incorrect","curly brackets","incorrect","quotes","incorrect","parentheses","incorrect"]
];

// functions: for loop net ninja > Daily Tuition (youtube, setInterval)

function countDown() {
    reset = setInterval(function() {
        if( timeLeft > 0) {
            timeLeft--;
            countdown.innerHTML = timeLeft;
        } else {
            timer.innerHTML = "Time's up!";
            clearInterval(reset);
            score = 0;
            return score;
        }    
    }, 1000)
}

function quizQuestions() {
    if (check == true) {
            q.innerHTML = questions[currentQ][0];
            a.innerHTML = questions[currentQ][1];
            b.innerHTML = questions[currentQ][3];
            c.innerHTML = questions[currentQ][5];
            d.innerHTML = questions[currentQ][7];  
            a.addEventListener("click", function() {
                checkAnswer(1); 
            })    
            b.addEventListener("click", function() {
                checkAnswer(3); 
            })    
            c.addEventListener("click", function() {
                checkAnswer(5); 
            })    
            d.addEventListener("click", function() {
                checkAnswer(7); 
            })    
        };
}

function checkAnswer(num) {
    if (questions[currentQ][num + 1] === "correct") {
        console.log("Correct")
    } else {
        console.log("Incorrect");
        timeLeft = timeLeft - 10;
    }
    currentQ++;
    quizQuestions();
    // need to display, subtract time, go to next (reset button to manually reset to Q1?)
}


    // show/hide functions:  https://www.youtube.com/watch?v=EaRrmOtPYTM&list=PLyuRouwmQCjmQTKvgqIgah03HF1wrYkA9&index=17
function startQuiz() {
    check = startScreen.classList.contains("show");
    if (check == true) {
        startScreen.classList.remove("show");
        startScreen.classList.add("hide");
        quizScreen.classList.remove("hide");
        quizScreen.classList.add("show");
    };
    };


        


// all the toggle functions
//function start(event) {
//    startScreen.reset.
//}

// Event listeners
// YouTube Steve Griffith for event listeners detailed
startBtn.addEventListener("click", countDown); // click start starts timer
startBtn.addEventListener("click", startQuiz); // click to hide start screen
startBtn.addEventListener("click", quizQuestions); // click to show first question

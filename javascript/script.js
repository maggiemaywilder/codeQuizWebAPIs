// Variables - buttons
var startBtn = document.getElementById("start"); 
var q = document.querySelector("#question");
var a = document.querySelector("#A");
var b = document.querySelector("#B");
var c = document.querySelector("#C");
var d = document.querySelector("#D");
var finalScore = document.getElementById("finalScore");
var enterScore = document.querySelector("#enterScore");

var timer = document.querySelector("#timer");
var countdown = document.querySelector("#countdown");
var timeLeft = 90, reset; 
var feedback = document.querySelector("#response");
var currentQ = 0;
var initials;
var score;

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
    ["Arrays in JavaScript can be used to store _______","numbers and strings","incorrect","other arrays","incorrect","booleans","incorrect","all of the above","correct"],
    ["String values must be enclosed within _____ when being assigned to variables.","commas","incorrect","curly brackets","incorrect","quotes","correct","parentheses","incorrect"]
];
var length = questions.length;


// functions: for loop Daily Tuition (youtube, setInterval)

function countDown() {
    reset = setInterval(function() {
        if( timeLeft > 0) {
            timeLeft--;
            countdown.innerHTML = timeLeft;
        } else {
            timer.innerHTML = "Time's up!";
            clearInterval(reset);
            score = 0;
            finish(score);
        }    
    }, 1000)
}

    // show/hide functions:  https://www.youtube.com/watch?v=EaRrmOtPYTM&list=PLyuRouwmQCjmQTKvgqIgah03HF1wrYkA9&index=17
function startQuiz() {
    if (true) {
        startScreen.classList.remove("show");
        startScreen.classList.add("hide");
        quizScreen.classList.remove("hide");
        quizScreen.classList.add("show");
    };
    timeLeft = 90;
    currentQ = 0;
    quizQuestions();
    };

function quizQuestions() {
    if (true) {
        q.innerHTML = questions[currentQ][0];
        a.innerHTML = questions[currentQ][1];
        b.innerHTML = questions[currentQ][3];
        c.innerHTML = questions[currentQ][5];
        d.innerHTML = questions[currentQ][7];  
    };
}

function checkAnswer(num) {
    if (questions[currentQ][num + 1] === "correct") {
        feedback.innerHTML = "Correct";
        next();
    } else {
        feedback.innerHTML = "Incorrect";
        timeLeft = timeLeft - 10;
        next();
    };
};

function next() {
    currentQ++;
    if (currentQ < length) {
        quizQuestions();
    } else {
        score = timeLeft;
        clearInterval(reset);
        finish(score);
    };
}

function finish(n) {
    if (n >= 0) {
        console.log(n);
        quizScreen.classList.remove("show");
        quizScreen.classList.add("hide");
        initialsScreen.classList.remove("hide");
        initialsScreen.classList.add("show");
        finalScore.innerHTML = n;
    };
};

// answer return functions for event listeners
function returnA() {
    checkAnswer(1);
};

function returnB() {
    checkAnswer(3);
};

function returnC() {
    checkAnswer(5);
};

function returnD() {
    checkAnswer(7);
};


// Event listeners
// YouTube Steve Griffith for event listeners detailed
startBtn.addEventListener("click", countDown); // click start starts timer
startBtn.addEventListener("click", startQuiz); // click to hide start screen
a.addEventListener("click", returnA);
b.addEventListener("click", returnB);
c.addEventListener("click", returnC);
d.addEventListener("click", returnD);
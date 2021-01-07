// Variables - buttons
var startBtn = document.getElementById("start"); 
var q = document.querySelector("#question");
var a = document.querySelector("#A");
var b = document.querySelector("#B");
var c = document.querySelector("#C");
var d = document.querySelector("#D");
var finalScore = document.getElementById("finalScore");

var timer = document.querySelector("#timer");
var countdown = document.querySelector("#countdown");
var timeLeft = 90, reset; 
var feedback = document.querySelector("#response");
var currentQ = 0;
var score;
var yourScore;

var enterScore = document.querySelector("#enterScore"); // submit initials
var reset = document.querySelector("#resetBtn"); // reset quiz
var clear = document.querySelector("#clearBtn"); // clear highscores
var player = document.querySelector("#initials"); // initials that were input
var place; // arbitrary first second third etc after sorting scores

var highScores = {

};

// Variables - cards
var startScreen = document.querySelector("#home");
var quizScreen = document.querySelector("#quiz");
var initialsScreen = document.querySelector("#inputInitials")
var scoreScreen = document.querySelector("#scores");

// https://www.youtube.com/watch?v=k8yJCeuP6I8&t=608s


function claimScore() {
    if(true) {
        var key = "Maggie-Quiz-Scores-"
        var final = yourScore;
        var person = player.value.trim().toUpperCase();
        highScore = (final + "_" + person);
        console.log(highScore);
        var storage = localStorage.getItem(key);
        var highScores = [];
        if(storage) {
            highScores = JSON.parse(storage);
        }
        highScores.push(highScore);
        highScores.sort();
        if (highScores.length > 10) {
            highScores.shift();
        };
        highScores.reverse();
        localStorage.setItem(key, JSON.stringify(highScores));
    }; 
    showScores(highScores);
}

function showScores(store) {
    let num = store.length;
    if (num) {
        for(var i = 0; i < num; i++) {
            // need to split each with .split("_") and display on chart. 
        }
    }

}
function resetQuiz() {
    if(true) {
        startScreen.classList.add("show");
        quizScreen.classList.add("hide");
        initialsScreen.classList.add("hide");
        scoreScreen.classList.add("hide");
        quizScreen.classList.remove("show");
        initialsScreen.classList.remove("show");
        scoreScreen.classList.remove("show");
        timeLeft = 90;
    }
}

function clearScores() {

}

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
        quizScreen.classList.remove("show");
        quizScreen.classList.add("hide");
        initialsScreen.classList.remove("hide");
        initialsScreen.classList.add("show");
        finalScore.innerHTML = n;
        yourScore = n;
        return yourScore;
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
enterScore.addEventListener("click", claimScore);
reset.addEventListener("click", resetQuiz);
// clear.addEventListener("click", clearScores);
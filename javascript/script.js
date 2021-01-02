// Variables
var time; // countdown time remaining
var btn = document.getElementById("start");

// Arrays
// Can I build an array of questions?
var questions = [
    {"question":"A very useful tool used during development and debugging for printing content to the debugger is:",
    "A":"Javascript",
    "B":"terminal/bash",
    "C":"for loops",
    "D":"console.log",
    "correct":"D"},
    {"question":"Commonly used data types DO NOT include:",
    "A":"strings",
    "B":"booleans",
    "C":"alerts",
    "D":"numbers",
    "correct":"C"},
    {"questions":"What is the answer to life, the universe, and everything?",
    "A":"pizza",
    "B":"42",
    "C":"love",
    "D":"money",
    "correct":"B"},
    {"question":"The condition in an if/else statement is enclosed within ______.",
    "A":"quotes",
    "B":"curly brackets",
    "C":"parentheses",
    "D":"square brackets",
    "correct":"C"}, // double check??
    {"question":"Arrays in JavaScript can be used to store _______",
    "A":"numbers and strings",
    "B":"other arrays",
    "C":"booleans",
    "D":"all of the above",
    "correct":"D"},
    {"question":"String values must be enclosed within _____ when being assigned to variables.",
    "A":"commas",
    "B":"curly brackets",
    "C":"quotes",
    "D":"parentheses",
    "correct":"C"},
    {"question":"What is the answer to life, the universe, and everything?",
    "A":"pizza",
    "B":"love",
    "C":"42",
    "D":"jquery",
    "correct":"C"},
]


// functions: for loop net ninja
function countdown() {
    var timerID = document.getElementById("#timer"); // countdown time remaining
    if(timerID >= 0) {
        timerID--;
        document.querySelector("#timer").innerHTML = timerID;
    } else {
        document.querySelector("#timer").innerHTML = "Time's up!";
        clearInterval(time);

    }
    console.log("button clicked");
    // manipulate dom to count down
};

// var timer = setInterval(displayTime, 1000)

// Event listeners
// YouTube Steve Griffith for event listeners detailed
btn.addEventListener("click", displayTime);
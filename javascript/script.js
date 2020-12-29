// Variables
var time; // countdown time remaining
var btn = document.getElementById("start");

// Arrays



// functions: for loop net ninja
function displayTime() {
    document.querySelector(".timer").innerHTML = time;
    console.log("button clicked");
    // manipulate dom to count down
};

// var timer = setInterval(displayTime, 1000)

// Event listeners
// YouTube Steve Griffith for event listeners detailed
btn.addEventListener("click", displayTime);
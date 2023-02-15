let homeScore = 0;
let awayScore = 0;
let quarter = 1;
let timer = "12:00";
let homeFouls = 0;
let awayFouls = 0;

// Functions for Home Team

function add1HomeScore() {
  homeScore += 1;
  document.getElementById("home-score").textContent = homeScore;
  console.log("add1HomeScore() called");
}
function add2HomeScore() {
  homeScore += 2;
  document.getElementById("home-score").textContent = homeScore;
  console.log("add2HomeScore() called");
}
function add3HomeScore() {
  homeScore += 3;
  document.getElementById("home-score").textContent = homeScore;
  console.log("add3HomeScore() called");
}

// Functions for Away Team

function add1AwayScore() {
  awayScore += 1;
  document.getElementById("away-score-count").textContent = awayScore;
  console.log("add1AwayScore() called");
}
function add2AwayScore() {
  awayScore += 2;
  document.getElementById("away-score-count").textContent = awayScore;
  console.log("add2AwayScore() called");
}
function add3AwayScore() {
  awayScore += 3;
  document.getElementById("away-score-count").textContent = awayScore;
  console.log("add3AwayScore() called");
}

// Functions for Timer and Quarter

function startTimer() {
  console.log("startTimer() called");
}
function stopTimer() {
  console.log("stopTimer() called");
}
function resetTimer() {
  console.log("resetTimer() called");
}

function nextQuarter() {
  console.log("nextQuarter() called");
}
// function to store the quarter in the DOM
function storeQuarter() {
  console.log("storeQuarter() called");
}

// Functions for Fouls

function addHomeFoul() {
  homeFouls += 1;
  document.getElementById("home-fouls-count").textContent = homeFouls;
  console.log("addHomeFoul() called");
}
function subHomeFoul() {
  homeFouls -= 1;
  document.getElementById("home-fouls-count").textContent = homeFouls;
  console.log("subHomeFoul() called");
}
function addAwayFoul() {
  awayFouls += 1;
  document.getElementById("away-fouls-count").textContent = awayFouls;
  console.log("addAwayFoul() called");
}
function subAwayFoul() {
  awayFouls -= 1;
  document.getElementById("away-fouls-count").textContent = awayFouls;
  console.log("subAwayFoul() called");
}

// Function to reset the game

function newGame() {
  document.getElementById("home-score").textContent = 0;
  resetTimer();
  homeScore = 0;
  awayScore = 0;
  quarter = 1;
  homeFouls = 0;
  awayFouls = 0;
  console.log("newGame() called");
}

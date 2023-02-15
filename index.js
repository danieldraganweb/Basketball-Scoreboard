let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");
let quarter = document.getElementById("quarter");
let timer = document.getElementById("timer");
let homeFouls = document.getElementById("home-fouls-count");
let awayFouls = document.getElementById("away-fouls-count");

function add1HomeScore() {
  console.log("add1HomeScore() called");
}
function add2HomeScore() {
  console.log("add2HomeScore() called");
}
function add3HomeScore() {
  console.log("add3HomeScore() called");
}

function add1AwayScore() {
  console.log("add1AwayScore() called");
}
function add2AwayScore() {
  console.log("add2AwayScore() called");
}
function add3AwayScore() {
  console.log("add3AwayScore() called");
}

function startTimer() {
  console.log("startTimer() called");
}
function stopTimer() {
  console.log("stopTimer() called");
}
function resetTimer() {
  console.log("resetTimer() called");
}

function addQuarter() {
  console.log("addQuarter() called");
}
function subQuarter() {
  console.log("subQuarter() called");
}

function addHomeFoul() {
  console.log("addHomeFoul() called");
}
function subHomeFoul() {
  console.log("subHomeFoul() called");
}
function addAwayFoul() {
  console.log("addAwayFoul() called");
}
function subAwayFoul() {
  console.log("subAwayFoul() called");
}
function newGame() {
  console.log("newGame() called");

  homeScore.innerHTML = 0;
  awayScore.innerHTML = 0;
  quarter.innerHTML = 1;
  timer.innerHTML = "00:00";
  homeFouls.innerHTML = 0;
  awayFouls.innerHTML = 0;
}
// Function

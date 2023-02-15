let homeScore = 0;
let awayScore = 0;
let quarter = 1;
let timer = 0;
let homeFouls = 0;
let awayFouls = 0;

function add1HomeScore() {
  homeScore += 1;
  document.getElementById("home-score").textContent = homeScore;
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

function nextQuarter() {
  console.log("nextQuarter() called");
}
// function subQuarter() {
//   console.log("subQuarter() called");
// }

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
  let homeScore = 0;
  let awayScore = 0;
  let quarter = 1;
  let timer = 0;
  let homeFouls = 0;
  let awayFouls = 0;
  console.log("newGame() called");
}

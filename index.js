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
  countdown = setInterval(function () {
    let timer = document.getElementById("timer");
    let time = timer.textContent.split(":");
    let minutes = time[0];
    let seconds = time[1];
    if (seconds == 0) {
      if (minutes == 0) {
        clearInterval(countdown);
        nextQuarter();
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    timer.textContent = minutes + ":" + seconds;
  }, 1000);

  console.log("startTimer() called");
}
function stopTimer() {
  clearInterval(countdown);
  console.log("stopTimer() called");
}
function resetTimer() {
  clearInterval(countdown);
  document.getElementById("timer").textContent = "12:00";
  console.log("resetTimer() called");
}

function nextQuarter() {
  if (quarter === 4) {
    if (homeScore > awayScore) {
      document.getElementById("quarter").innerHTML = "Home Team Wins!";
    } else if (awayScore > homeScore) {
      document.getElementById("quarter").innerHTML = "Away Team Wins!";
    } else {
      document.getElementById("quarter").innerHTML = "Tie Game!";
    }

    timer = "0:00";
    document.getElementById("timer").textContent = timer;

    document.getElementById("new-game-btn").disabled = false;
    document.getElementById("next-quarter-btn").disabled = true;

    return;
  }

  quarter += 1;
  document.getElementById("quarter").textContent = quarter;

  // Reset the timer to 12:00
  timer = "12:00";
  document.getElementById("timer").textContent = timer;

  console.log("nextQuarter() called");
}

// Functions for Fouls

function addHomeFoul() {
  homeFouls += 1;
  document.getElementById("home-fouls-count").textContent = homeFouls;
  console.log("addHomeFoul() called");
}
function subHomeFoul() {
  if (homeFouls < 1) {
    return;
  }
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
  if (awayFouls < 1) {
    return;
  }
  awayFouls -= 1;
  document.getElementById("away-fouls-count").textContent = awayFouls;
  console.log("subAwayFoul() called");
}

// Function to reset the game
function newGame() {
  // Check that the required elements exist in the HTML document
  const homeScoreElem = document.getElementById("home-score-count");
  const awayScoreElem = document.getElementById("away-score-count");
  const homeFoulsElem = document.getElementById("home-fouls-count");
  const awayFoulsElem = document.getElementById("away-fouls-count");
  const quarterElem = document.getElementById("quarter");
  const timerElem = document.getElementById("timer");
  const newGameBtn = document.getElementById("new-game-btn");

  if (
    !homeScoreElem ||
    !awayScoreElem ||
    !homeFoulsElem ||
    !awayFoulsElem ||
    !quarterElem ||
    !timerElem ||
    !newGameBtn
  ) {
    console.error("Required elements not found in HTML document");
    return;
  }

  // Reset game variables
  homeScore = 0;
  awayScore = 0;
  homeFouls = 0;
  awayFouls = 0;
  quarter = 1;
  timer = "12:00";

  // Update the HTML elements with the new values
  homeScoreElem.textContent = homeScore;
  awayScoreElem.textContent = awayScore;
  homeFoulsElem.textContent = homeFouls;
  awayFoulsElem.textContent = awayFouls;
  quarterElem.textContent = quarter;
  timerElem.textContent = timer;
  newGameBtn.disabled = true;

  console.log("New game started");
}

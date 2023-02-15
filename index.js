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
    if (quarter == 4) {
      timer = "0:00";
      document.getElementById("timer").textContent = timer;
      if (homeScore > awayScore) {
        document.getElementById("quarter").textContent = "Home Team Wins!";
      } else if (awayScore > homeScore) {
        document.getElementById("quarter").textContent = "Away Team Wins!";
      } else {
        document.getElementById("quarter").textContent = "Tie Game!";
      }
      document.getElementById("new-game-btn").style.display = "block";
      return;
    }
  
    quarter += 1;
    document.getElementById("quarter").textContent = quarter;
  
    // reset the timer to 12:00
    timer = "12:00";
    document.getElementById("timer").textContent = timer;
    
    console.log("nextQuarter() called");
  }
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
  resetTimer();
  document.getElementById("home-score").textContent = 0;
  document.getElementById("away-score-count").textContent = 0;
  document.getElementById("quarter").textContent = 1;
  homeScore = 0;
  awayScore = 0;
  document.getElementById("home-fouls-count").textContent = 0;
  document.getElementById("away-fouls-count").textContent = 0;
  homeFouls = 0;
  awayFouls = 0;
  console.log("newGame() called");
}

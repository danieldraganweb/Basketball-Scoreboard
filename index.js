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

let countdown;
//function to display the timer in 2 digits
function displayTimer() {
  let timer = document.getElementById("timer");
  let time = timer.textContent.split(":");
  let minutes = time[0];
  let seconds = time[1];
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  timer.textContent = minutes + ":" + seconds;
}
//function to start the timer
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
  if (timer === "5:00") {
    document.getElementById("next-quarter-btn").disabled = true;
    return;
  }
  timer = "12:00";
  document.getElementById("timer").textContent = "12:00";
  console.log("resetTimer() called");
}

function nextQuarter() {
  if (quarter === 4) {
    if (homeScore > awayScore) {
      document.getElementById("quarter").innerHTML = "Home Team Wins!";
      timer = "12:00";
    } else if (awayScore > homeScore) {
      document.getElementById("quarter").innerHTML = "Away Team Wins!";
      timer = "12:00";
    } else {
      document.getElementById("quarter").innerHTML = "Tie Game!";
    }

    timer = "5:00";
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
  if (timer === "5:00") {
    timer = "12:00";
    document.getElementById("timer").textContent = timer;
    quarter = 1;
    document.getElementById("quarter").textContent = quarter;
    homeScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    awayScore = 0;
    document.getElementById("away-score-count").textContent = awayScore;
    homeFouls = 0;
    document.getElementById("home-fouls-count").textContent = homeFouls;
    awayFouls = 0;
    document.getElementById("away-fouls-count").textContent = awayFouls;
    document.getElementById("new-game-btn").disabled = false;
    document.getElementById("next-quarter-btn").disabled = true;
    console.log("New game started");
  } else {
    timer = "12:00";
    quarter = 1;
    document.getElementById("quarter").textContent = quarter;
    homeScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    awayScore = 0;
    document.getElementById("away-score-count").textContent = awayScore;
    homeFouls = 0;
    document.getElementById("home-fouls-count").textContent = homeFouls;
    awayFouls = 0;
    document.getElementById("away-fouls-count").textContent = awayFouls;
    document.getElementById("new-game-btn").disabled = true;
    document.getElementById("next-quarter-btn").disabled = timer === "12:00";
    console.log("New game started");
  }
}

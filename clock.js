let tMinute = 0;
let tSecond = 0;
let tTenMS = 0;

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

const secondPassed = () => {
  clearInterval(this.myInterval);
  myInterval = setInterval(tenMSPassing, 10);
};

const secondStopped = () => {
  clearInterval(this.myInterval);
};

const resetTime = () => {
  tMinute = 00;
  tSecond = 00;
  tTenMS = 00;
  document.getElementById("time").innerHTML = "00:00:00";
};

stopButton.addEventListener("click", secondStopped);
startButton.addEventListener("click", secondPassed);
resetButton.addEventListener("click", resetTime);

const tenMSPassing = () => {
  if (tTenMS === 100) {
    tTenMS = 0;
    if (tSecond === 60) {
      tSecond = 0;
      tMinute = tMinute + 1;
    } else {
      tSecond = tSecond + 1;
    }
  } else {
    showingSecond = showTime(tSecond);
    showingMinute = showTime(tMinute);
    showingtTenMs = showTime(tTenMS);
    tTenMS = tTenMS + 1;
    document.getElementById(
      "time"
    ).innerHTML = `${showingMinute}:${showingSecond}:${showingtTenMs}`;
  }
};

const showTime = (tPos) => {
  if (tPos < 10) {
    return `0${tPos}`;
  } else {
    return tPos;
  }
};

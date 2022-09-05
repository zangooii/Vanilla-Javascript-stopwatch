let tMinute = 0;
let tSecond = 0;
let hundredth = 0;

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
  tMinute = 0;
  tSecond = 0;
  hundredth = 0;
  changeDom("minute", '00');
  changeDom("second", '00');
  changeDom("hundredth", '00');
};

stopButton.addEventListener("click", secondStopped);
startButton.addEventListener("click", secondPassed);
resetButton.addEventListener("click", resetTime);


const tenMSPassing = () => {
  if (hundredth === 100) {
    hundredth = 0;
    if (tSecond === 60) {
      tSecond = 0;
      tMinute = tMinute + 1;
    } else {
      tSecond = tSecond + 1;
    }
  } else {
    showingSecond = showTime(tSecond);
    showingMinute = showTime(tMinute);
    showingtHundredth = showTime(hundredth);
    hundredth = hundredth + 1;
    changeDom("minute", showingMinute);
    changeDom("second", showingSecond);
    changeDom("hundredth", showingtHundredth);
  }
};

const showTime = (tPos) => {
  if (tPos < 10) {
    return `0${tPos}`;
  } else {
    return tPos;
  }
};

const changeDom = (elementId, presentTime) => {
  document.getElementById(elementId).innerHTML = presentTime;
};

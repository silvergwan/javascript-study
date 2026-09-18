const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

let startTime = Date.now();
let time;
let intervalId;

start = () => {
  time = setInterval(() => {
    let now = new Date();
    let differ = now - startTime;
  });
};

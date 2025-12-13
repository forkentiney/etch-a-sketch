const screen = document.querySelector("#screen");
const leftKnob = document.querySelector("#knob-left");
const rightKnob = document.querySelector("#knob-right");
const slider = document.querySelector("#resolution");
const resDisplay = document.querySelector("#res-display");
let resolution = document.querySelector("#resolution");

window.addEventListener("keydown", draw);
window.addEventListener("keyup", stopDraw);
resolution.addEventListener("input", changeResolution);

function draw(key) {
  resDisplay.textContent = "";

  if (key.code == "KeyA") {
    leftKnob.classList.add("anticlockwise");
  } else if (key.code == "KeyS") {
    leftKnob.classList.add("clockwise");
  } else if (key.code == "KeyK") {
    rightKnob.classList.add("anticlockwise");
  } else if (key.code == "KeyL") {
    rightKnob.classList.add("clockwise");
  } else {
    console.log("Not a valid keypress:");
  };
};

function stopDraw(key) {
  if (key.code == "KeyA") {
    leftKnob.classList.remove("anticlockwise");
  } else if (key.code == "KeyS") {
    leftKnob.classList.remove("clockwise");
  } else if (key.code == "KeyK") {
    rightKnob.classList.remove("anticlockwise");
  } else if (key.code == "KeyL") {
    rightKnob.classList.remove("clockwise");
  } else {
    console.log("nothing happened");
  }
};

function changeResolution() {
  resDisplay.textContent = resolution.value;
};

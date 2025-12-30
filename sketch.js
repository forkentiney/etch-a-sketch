const screen = document.querySelector("#screen");
const leftKnob = document.querySelector("#knob-left");
const rightKnob = document.querySelector("#knob-right");
const slider = document.querySelector("#resolution");
let resolution = document.querySelector("#resolution");

window.addEventListener("keydown", draw);
window.addEventListener("keyup", stopDraw);
resolution.addEventListener("input", changeResolution);

function draw(key) {
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
  let num = Math.pow(resolution.value, 2);
  let height = Math.floor(552 / Math.sqrt(num));
  let width = Math.floor(800 / Math.sqrt(num)) - 8;
  for (let i = 0; i <= num; i++) {
    const pixels = document.querySelectorAll(".pixel");
    if (pixels.length < num) {
      const pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel");
      pixel.setAttribute("style", `min-height: ${height}px; min-width: ${width}px;`);
      screen.appendChild(pixel);
      console.log("Resolution increased");
    } else if (num < pixels.length) {
      pixels.forEach(p => p.remove());
      console.log("Resolution decreased");
    } else if (pixels.length === num) {
      pixels.forEach(p => p.setAttribute("style", `min-height: ${height}px; min-width: ${width}px;`));
      console.log(pixels.length);
    }
  };
};

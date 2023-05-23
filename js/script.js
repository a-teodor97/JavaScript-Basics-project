"use strict";

// Selecting the main element
const main = document.querySelector(".main");

// Creating the container element

const container = document.createElement("div");
container.classList.add("container");
main.appendChild(container);

// Creating the upper-side div
const upperSide = document.createElement("div");
upperSide.classList.add("upper-side");
container.appendChild(upperSide);

// Creating the counter value element

const counterValue = document.createElement("p");
counterValue.classList.add("counter-value");
counterValue.textContent = 0;
upperSide.appendChild(counterValue);

// Creating the lower side div

const lowerSide = document.createElement("div");
lowerSide.classList.add("lower-side");
container.appendChild(lowerSide);

// Creating the buttons div

const buttons = document.createElement("div");
buttons.classList.add("buttons");
lowerSide.appendChild(buttons);

// Creating the add button

const addBtn = document.createElement("button");
addBtn.classList.add("add");
addBtn.textContent = "+";
buttons.appendChild(addBtn);

// Creating the subtract button

const subtractBtn = document.createElement("button");
subtractBtn.classList.add("subtract");
subtractBtn.textContent = "-";
buttons.appendChild(subtractBtn);

// Creating the reset div
const resetContainer = document.createElement("div");
resetContainer.classList.add("reset-container");
lowerSide.appendChild(resetContainer);

// Creating the reset button

const resetBtn = document.createElement("button");
resetBtn.classList.add("reset");
resetBtn.textContent = "Reset";
resetContainer.appendChild(resetBtn);

let total;

// Starting conditions
const init = function () {
  total = 0;

  counterValue.textContent = 0;
};
init();

// Adding numbers functionality
addBtn.addEventListener("click", function () {
  total++;
  counterValue.textContent = total;
});

// subtracting numbers functionality
subtractBtn.addEventListener("click", function () {
  total--;
  counterValue.textContent = total;
});

// Resetting the counter
resetBtn.addEventListener("click", init);

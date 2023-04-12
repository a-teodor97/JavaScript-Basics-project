"use strict";

// Selecting elements
const counterValue = document.querySelector(".counter-value");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const resetBtn = document.querySelector(".reset");

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

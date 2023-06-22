"use strict";

// Selecting the main element
const main = document.querySelector(".main");

// function that creates elements
function createElement(name, type, className) {
  const element = document.createElement(type);
  element.classList.add(className);
  name.appendChild(element);
  return element;
}

// creating the DOM elements
const container = createElement(main, "div", "container");
const upperSide = createElement(container, "div", "upper-side");
const counterValue = createElement(upperSide, "p", "counter-value");
const lowerSide = createElement(container, "div", "lower-side");
const buttons = createElement(lowerSide, "div", "buttons");
const addBtn = createElement(buttons, "button", "add");
const subtractBtn = createElement(buttons, "button", "subtract");
const resetContainer = createElement(lowerSide, "div", "reset-container");
const resetBtn = createElement(resetContainer, "button", "reset");

// setting the textcontent of the elements
addBtn.textContent = "+";
subtractBtn.textContent = "-";
resetBtn.textContent = "Reset";

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

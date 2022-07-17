const prompt = require("prompt-sync")();
console.log("1. +");
console.log("2. -");
console.log("3. *");
console.log("4. /");
let num1 = parseInt(prompt("Enter First Number : "));
let num2 = parseInt(prompt("Enter Second Number : "));
let action = parseInt(prompt("Choose action : "));
let result;

switch (action) {
  case 1:
    result = num1 + num2;
    action = "+";
    break;
  case 2:
    result = num1 - num2;
    action = "-";
    break;
  case 3:
    result = num1 * num2;
    action = "*";
    break;
  case 4:
    result = num1 / num2;
    action = "/";
    break;

  default:
    result = "Invalid Input";
    break;
}

console.log("Your result is : ", num1, action, num2, " = ", result);

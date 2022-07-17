const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Enter NUmber:"));

for (let i = 1; i <= 100; i++) {
  if (i % num1 == 0 && i % 2 == 0) {
    console.log(i, "\n");
  }
}

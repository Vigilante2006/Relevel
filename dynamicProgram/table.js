const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Which table you want : "));

for (let i = 1; i <= 10; i++) {
  console.log(num1, "X", i, "=", num1 * i);
}

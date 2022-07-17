const prompt = require("prompt-sync")();

let age = parseInt(prompt("Enter Number : "));

if (age>=18) {
    console.log("TRUE")
}
else  {
    console.log("FALSE")
}
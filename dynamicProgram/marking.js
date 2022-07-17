const prompt = require("prompt-sync")();

let marks = parseInt(prompt("Enter your marks : "));

if (marks >= 90) {
  console.log("A");
} else if (marks <= 89 && marks >= 80) {
  console.log("B");
} else if (marks <= 79 && marks >= 60) {
  console.log("C");
} else if (marks <= 59 && marks >= 33) {
  console.log("D");
} else {
  console.log("F");
}
/* ====================================OR=========================================*/ console.log("================== Inline Condition ==================");

//inline conditional statement
marks >= 90
  ? console.log("A")
  : marks <= 89 && marks >= 80
  ? console.log("B")
  : marks <= 79 && marks >= 60
  ? console.log("C")
  : marks <= 59 && marks >= 33
  ? console.log("D")hvxcjyzcbzjyi
  : console.log("F");


  // 
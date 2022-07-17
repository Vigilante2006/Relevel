console.log("hello world");
var num1 = 20;
var num2 = 30;
console.log(num1 + num2);
console.log(typeof num1, typeof num2);

var num3 = "20";

console.log(typeof num3);
var bol = true;
console.log(typeof bol);

// comparision operator

var x = "20";
var y = 20;
console.log(x == y); //true/false
console.log(x === y); //true/false as well as type

// creating function..

function addNum(x, y) {
  var result = x + y;
  return result;
}

console.log(addNum(10, 20));
console.log(addNum(20, 20));
console.log(addNum(50, 70));
console.log(addNum(90, 80));

console.log(10 === +"10");
console.log(10 === "10");
console.log(10 === 10);
console.log(10 + 20 + "10" + 20 + 30);

let b = 10;
let a = 10;
let c = 10;
c = c++;
console.log(a++);
console.log(++b);
console.log(c);

function isOddOrEve(num) {
  if (num % 2 == 0) {
    console.log("This is an Even Number");
  } else {
    console.log("This is an odd Number");
  }
}
function posNig(num) {
  if (num < 0) {
    console.log("This is an nigative Number");
  } else {
    console.log("This is an positive Number");
  }
}

posNig(-55)
posNig(55)
isOddOrEve(55);
isOddOrEve(50);



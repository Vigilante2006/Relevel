const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter Number : "));

let c;
const prfctsqr = (num) => {
  let ind = 1;
  while (ind * ind <= num) {
    if (ind * ind !== num) {
      ind++;
      continue;
    }
    return (c = 1);
  }
  return (c = 0);
};
prfctsqr(num);
switch (c) {
  case 1:
    console.log(num, " is a Perfect Sqr");
    break;

  default:
    console.log(num, " is not a Perfect Sqr");
    break;
}


// =========================================OR==================================================

function perfctSQR(num) {
  let number = String(Math.sqrt(num));
  if (number.includes(".")) {
    console.log(num, " is not a Perfect Sqr");
  }
  else
  {
    console.log(num, " is a Perfect Sqr");
  }
}
perfctSQR(num)
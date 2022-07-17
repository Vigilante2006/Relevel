let rate = 2;
let busFare;
let tax;
let totalBusFare;
let amount=100;
let amountReturnable;

// Rate per Km = 2 rupees

// function to calculate the bus fare for distance travelled
function howMuchShouldIPay(distance) {
  busFare = rate * distance;
  tax = (busFare * 18) / 100;
  totalBusFare = busFare + tax;
  let amount = 200;
  amountReturnable = amount - totalBusFare;
  // If block
console.log(amount);
  if (distance <= 10) {
    console.log(
      "Your fare is",
      totalBusFare,
      "your balance is",
      amountReturnable
    );
    console.log(totalBusFare);
  } else if (distance >= 10 && distance <= 20) {
    console.log(
      "Your fare is",
      totalBusFare,
      "your balance is",
      amountReturnable
    );
  } else if (distance >= 20 && distance <= 30) {
    console.log(
      "Your fare is",
      totalBusFare,
      "your balance is",
      amountReturnable
    );
  } else if (distance >= 30 && distance <= 40) {
    console.log(
      "Your fare is",
      totalBusFare,
      "your balance is",
      amountReturnable
    );
  } else {
    console.log("wrong Route");
  }
  return busFare;
}
console.log(amount);
howMuchShouldIPay(30);
howMuchShouldIPay(50);
howMuchShouldIPay(20);

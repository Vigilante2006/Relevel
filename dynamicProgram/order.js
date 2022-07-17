function order(a, b, c) {
  if (a > b && b > c) {
    console.log("Decreasing Order");
  }
 else if (c > b && b > a) {
    console.log("Increasing Order");
  }
  else{
    console.log("NO Order");
}
}

order(2,5,8);
order(5,9,8);
order(8,5,4);
order(2,4,15);

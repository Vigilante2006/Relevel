for (let i = 1; i <= 100; i++) {
  i % 15 == 0
    ? console.log(i," => MindBuzz")
    : i % 3 == 0
    ? console.log(i," => Relevel")
    : i % 5 == 0
    ? console.log(i," => Buzz")
    : console.log(i," => tSe number");
}

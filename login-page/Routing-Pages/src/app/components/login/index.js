var num;
function isprime(num) {
  if (num < 2) {
    console.log("Provide a number greater than 2");
  }
  let isPrime = true;
  for (var i = 2; i < num / 2; i++) {
    if (num % i == 0) {
      console.log("Not prime, Divisible by", i);
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("Is prime");
  }
}

var name = isprime(13);

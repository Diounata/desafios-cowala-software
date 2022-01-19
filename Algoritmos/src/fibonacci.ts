function getFibonacciNumber(number: number): number[] {
  const fibonacciArray: number[] = [];

  for (let counter = 0; counter < number; counter++) {
    if (counter < 2) fibonacciArray.push(counter === 0 ? 0 : 1);
    else {
      const currentFibonacciNumber = fibonacciArray[counter - 1] + fibonacciArray[counter - 2];

      fibonacciArray.push(currentFibonacciNumber);
    }
  }

  return fibonacciArray;
}

const fibonacciNumber = getFibonacciNumber(6);

console.log(fibonacciNumber);

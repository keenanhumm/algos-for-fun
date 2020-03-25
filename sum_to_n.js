const sumToN = (n) => { 
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

const testCases = [
  { input: 4, expected: 10 },
  { input: 3, expected: 6 },
  { input: 0, expected: 1 }
];

testCases.forEach(({ input, expected }, index) => 
  console.log(sumToN(input) === expected ? `${index} is passing` : `${index} is failing`));
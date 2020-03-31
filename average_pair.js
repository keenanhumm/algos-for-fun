// (a + b)/2 = t
// a + b = 2t
// a = 2(t - b)
function getAverage(n, m) {
  return (n + m) / 2;
}

function averagePair(arr, target) {
  let lesserIndex = 0;
  let greaterIndex = arr.length - 1;

  while (lesserIndex < greaterIndex) {
    const currAvg = getAverage(arr[lesserIndex], arr[greaterIndex]);
    if (currAvg === target) return true;
    else if (currAvg < target) lesserIndex++;
    else greaterIndex--;
  }
  return false;
}

const testArr = [2,3,4,5,6,7,7,7,7];

const tests = [
  { target: 4, result: true },
  { target: 60, result: false },
  { target: 1, result: false }
];

tests.forEach((test, index) => console.log(
  index, averagePair(testArr, test.target) === test.result ? 'pass' : 'fail'
));



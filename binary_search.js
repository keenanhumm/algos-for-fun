function searchNum(arr = [], target = null) {
  const { length: n } = arr;
  if (!target || !n) return -1;
  let start = 0;
  let end = n - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) start = mid;
    else end = mid;
  }

  return -1;
}

const testArr = [10, 33, 455, 521, 687, 689, 788, 798, 799];

const tests = [
  { target: 10, result: testArr.indexOf(10) },
  { target: 521, result: testArr.indexOf(521) },
  { target: 798, result: testArr.indexOf(798) }
];

tests.forEach((test, index) =>
  console.log(
    index,
    searchNum(testArr, test.target) === test.result ? "pass" : "fail"
  )
);

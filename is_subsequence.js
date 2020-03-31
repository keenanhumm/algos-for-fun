function isSubsequence(seq, test) {
  let seqIndex = 0;
  let testIndex = 0;

  while (testIndex < test.length) {
    if (test[testIndex] === seq[seqIndex]) seqIndex++;
    if (seqIndex === seq.length) return true;
    testIndex++;
  }
  return false;
}

const testString = 'fdjlssflsjfalflfjksssaljfls';
const testCases = [
  {
    seq: 'ssa',
    result: true
  },
  {
    seq: 'zzz',
    result: false
  },
  {
    seq: 'djsjsssl',
    result: true
  },
];

testCases.forEach((test, index) =>
  console.log(
    index,
    isSubsequence(test.seq, testString) === test.result ? "pass" : "fail"
  )
);
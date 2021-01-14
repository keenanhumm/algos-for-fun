/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals.length) return intervals;
  // sort by start
  intervals.sort((a,b) => a[0] - b[0]);
  let prev = intervals[0];
  const merged = [prev];
  for (let curr of intervals) {
      if (curr[0] <= prev[1]) {
          prev[1] = Math.max(curr[1], prev[1])
      } else {
          merged.push(curr);
          prev = curr;
      }
  }
  
  return merged;
};
// from: https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (heights) {
  // max l and r barriers
  let lMax = 0;
  let rMax = 0;

  // l and r pointers
  let l = 0;
  let r = heights.length - 1;

  // trapped water so far
  let trapped = 0;

  // until pointers meet
  while (l < r) {
    lMax = Math.max(lMax, heights[l]);
    // a non-negative difference btwn max barrier and current pointer is equal to the increase in trapped water
    trapped += lMax - heights[l];

    rMax = Math.max(rMax, heights[r]);
    trapped += rMax - heights[r];

    // move the lesser pointer
    heights[l] < heights[r] ? l++ : r--;
  }

  return trapped;
};

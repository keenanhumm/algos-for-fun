// from: https://leetcode.com/problems/k-closest-points-to-origin
const getDistance = ([x, y]) => {
  return x ** 2 + y ** 2;
};

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  return points.sort((a, b) => getDistance(a) - getDistance(b)).slice(0, K);
};

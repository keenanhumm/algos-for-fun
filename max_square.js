// from: https://leetcode.com/problems/maximal-square

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix.length) return 0;
  
  const dp = new Array(matrix.length + 1).fill(0).map(() => {
      return new Array(matrix[0].length + 1).fill(0);
  });
  
  let max = 0;
  for (let r = 1; r < dp.length; r++) {
      for (let c = 1; c < dp[r].length; c++) {
          if (matrix[r-1][c-1] != 0) {
              dp[r][c] = Math.min(
                  dp[r-1][c],
                  dp[r][c-1],
                  dp[r-1][c-1]
              ) + 1;
              max = Math.max(max, dp[r][c]);
          }
      }
  }
  return max**2;
};
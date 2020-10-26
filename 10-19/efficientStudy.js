function maximumLearning(iv, articles, p) {
  // Write your code here

  const dp = [new Array(p + 1).fill(0)];
  // create a 2D array
  // each row will represent each page amount in the articles array
  for (let i = 0; i < articles.length; i += 1) {
    dp.push(new Array(p + 1).fill(0));
  }
  // loop through each row of the dp array
  for (let i = 1; i < dp.length; i += 1) {
    const pageAmt = articles[i - 1] * 2;
    const currValue = iv[i - 1];
    // go thru each page starting from 0 to the max pages, p
    for (let currPageMax = 0; currPageMax <= p; currPageMax += 1) {
      // if the current pages you can read is less than j (the current max pages)
      if (pageAmt <= currPageMax) {
        // find the max
        dp[i][currPageMax] = Math.max(
          dp[i - 1][currPageMax],
          dp[i - 1][currPageMax - pageAmt] + currValue
        );
      } else {
        dp[i][currPageMax] = dp[i - 1][currPageMax];
      }
    }
  }
  return dp[articles.length][p];
}

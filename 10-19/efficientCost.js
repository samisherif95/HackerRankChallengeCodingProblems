//bad time complexity passes only 6/13 test cases 

function calculateCost(arr, k, memo = {}) {
  //     // Write your code here

  if (!arr.length) return 0;
  let solutions = [];
  for (let i = 1; i <= k; i++) {
    let temp = arr.slice(0, i);
    let max = Math.max(...temp);
    solutions.push(max + calculateCost(arr.slice(i), k));
    if (i === arr.length) break;
  }
  return Math.min(...solutions);
}

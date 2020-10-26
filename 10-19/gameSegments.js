function playSegments(coins) {
  let player1 = 0; //0
  let player2 = 0; //2
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] === 0) {
      player2--;
    } else {
      player2++;
    }
  }
  for (let i = 0; i < coins.length; i++) {
    if (player1 > player2) {
      return i;
    }
    if (coins[i] === 0) {
      player2++;
      player1--;
    } else {
      player2--;
      player1++;
    }
  }
  return -1;
}

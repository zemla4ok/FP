// Подбор суммы

const COINS_NOM = [1, 2, 3, 4, 5];


function getCountOfWays(money, indexOfCoin) {
  if (money < 0 || indexOfCoin < 0) return 0;
  if (money === 0 || indexOfCoin === 0) return 1;
  return getCountOfWays(money, indexOfCoin - 1) + getCountOfWays(money - COINS_NOM[indexOfCoin], indexOfCoin);
}


console.log(getCountOfWays(4, COINS_NOM.length - 1));
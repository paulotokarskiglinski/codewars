/*
* How good are you really?
* https://www.codewars.com/kata/5601409514fc93442500010b
*/

export const betterThanAverage = (classPoints: number[], yourPoints: number) : boolean => {
  const sum = classPoints.reduce((acc, value) => acc + value, 0);
  return yourPoints > (sum / classPoints.length);
}

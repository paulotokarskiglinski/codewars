/*
 * Transportation on vacation
 * https://www.codewars.com/kata/568d0dd208ee69389d000016
*/

export const rentalCarCost = (d: number): number => {
  let total = d * 40;
  
  if (d < 3) {
    return total;
  } else if (d >= 3 && d < 7) {
    return total - 20;
  } else {
    return total - 50;
  }
}

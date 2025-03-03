/*
 * Drink about
 * https://www.codewars.com/kata/56170e844da7c6f647000063
 */

export const peopleWithAgeDrink = (old: number): string => {
  if (old <= 13) {
    return 'drink toddy';
  } else if (old <= 17) {
    return 'drink coke';
  } else if (old <= 20) {
    return 'drink beer';
  } else {
    return 'drink whisky';
  }
}

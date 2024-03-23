/*
* Calculate average
* https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
*/

export const findAverage = (array: number[]): number => {
  if (array.length) {
    const sum = array.reduce((acc, value) => acc += value, 0);
    return sum / array.length;
  }
  return 0;
}

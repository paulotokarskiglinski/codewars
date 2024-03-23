/*
* Invert values
* https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
*/

export const invert = (array: number[]): number[] => {
  const result = [];
  for (const item of array) {
    result.push(item * -1);
  }
  return result;
}

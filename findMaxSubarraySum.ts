/*
* Maximum subarray sum
* https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
*
* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
* maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
* should be 6: [4, -1, 2, 1]
*/

export const maxSequence = (array: number[]): number => {
  if (array.length === 0 || Math.max(...array) < 0)
    return 0;

  let sumArray: number[] = [array[0]];

  for (let i = 1; i < array.length; i++)
    sumArray[i] = sumArray[i - 1] > 0 ? array[i] + sumArray[i - 1] : array[i];
  
  return Math.max(...sumArray);
}
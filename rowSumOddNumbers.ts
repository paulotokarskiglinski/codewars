/*
* Sum of odd numbers
* https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
*
* Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
*/

export const rowSumOddNumbers = (n: number): number => Math.pow(n, 3);

// Solution 2
// export const rowSumOddNumbers = (n: number): number => {
//   let firstNumber = n ** 2 - (n - 1);
//   let sum: number = firstNumber;
//   for (let i = 1; i < n; i++)
//     sum += firstNumber += 2;
//   return sum;
// }
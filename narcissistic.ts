/*
* Does my number look big in this?
* https://www.codewars.com/kata/5287e858c6b5a9678200083c
*
* A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
* For example, take 153 (3 digits), which is narcissistic:
* 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
*/

export const narcissistic = (value: number): boolean => value === value.toString().split('').reduce((sum: number, value: string, i: number, arr: string[]) => sum + parseInt(value) ** arr.length, 0);

// Solution 2
// let sum: number = 0;
// const values = value.toString().split('');
// for (let i of values)
//   sum += Math.pow(parseInt(i), values.length);
// return sum === value;

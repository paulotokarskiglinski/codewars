/*
* Summing a number's digits
* https://www.codewars.com/kata/52f3149496de55aded000410
* 
* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
*/

export const sumDigits = (n: number): number => {
  const str: string[] = n.toString().replace('-', '').split('');
  const res = str.reduce((acc: number, val: string) => acc += parseInt(val), 0);
  return res;
}

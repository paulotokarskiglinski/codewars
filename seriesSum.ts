/*
* Sum of the first nth term of Series
* https://www.codewars.com/kata/555eded1ad94b00403000071
*
* Your task is to write a function which returns the sum of following series upto nth term(parameter).
* Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
*/

export const SeriesSum = (n: number): string => {
  let sum: number = 0;
  
  for (let i = 1; n > 0; i += 3, n--)
    sum += 1 / i;  

  return sum.toFixed(2);
}
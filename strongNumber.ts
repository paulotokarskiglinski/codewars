/**
 * Strong Number (Special Numbers Series #2)
 * https://www.codewars.com/kata/5a4d303f880385399b000001
 */

export const strongNumber = (num: number): string => {
  let result = 0;

  for (const value of num.toString().split('')) {
    result += factorial(parseInt(value, 10));
  }
  
  return num === result ? 'STRONG!!!!' : 'Not Strong !!';
};

const factorial = (num: number): number => {
  if (num === 0 || num === 1) {
    return 1;
  }

  let res = 1;

  for (let n = 1; n <= num; n++) {
    res = n * res;
  }

  return res;
}

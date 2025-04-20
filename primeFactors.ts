/*
 * Primes in numbers
 * https://www.codewars.com/kata/54d512e62a5e54c96200019e
 */

export const primeFactors = (n: number): string => {
  let count: number = 2;
  const numbers: Record<string, number> = {};
  
  while (n > 1) {
    if (n % count === 0) {
      n = n / count;
      numbers[count] = numbers[count] ? ++numbers[count] : 1;
    } else {
      count++;
    }
  }
  
  let result: string = '';
  for (const key in numbers) {
    if (numbers[key] === 1) {
      result += `(${key})`;
    } else {
      result += `(${key}**${numbers[key]})`;
    }
  }

  return result;
}

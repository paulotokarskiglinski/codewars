/*
 * Basic Sequence Practice
 * https://www.codewars.com/kata/5436f26c4e3d6c40e5000282
 */

export const sumOfN = (n: number): number[] => {
  const result: number[] = [];
  
  for (let i = 0; i <= Math.abs(n); i++) {
    const sum = (i * (i + 1)) / 2;
    result.push(n < 0 ? sum * -1 : sum);
  }
  
  return result;
}

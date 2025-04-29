/*
 * Lario and Muigi Pipe Problem
 * https://www.codewars.com/kata/56b29582461215098d00000f
 */

export const pipeFix = (numbers: number[]): number[] => {
  if (numbers.length === 1) {
    return numbers;
  }
  
  const result: number[] = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    result.push(i);
  }
  
  return result;
}

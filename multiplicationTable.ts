/*
 * Multiplication table
 * https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
 */

export const multiplicationTable = (size: number): number[][] => {
  const result: number[][] = [];

  for (let i = 1; i <= size; i++) {
    const temp: number[] = [];
    for (let j = 1; j <= size; j++) {
      temp.push(i * j);
    }
    result.push(temp)
  }
  
  return result;
}

/*
* Count by X
* https://www.codewars.com/kata/5513795bd3fafb56c200049e
*/

export const countBy = (x: number, n: number): number[] => {
  let result: number[] = [];

  let value: number = 1;
  while(result.length < n) {
    if (value % x === 0) {
      result.push(value);
    }

    value++;
  }
  
  return result;
}

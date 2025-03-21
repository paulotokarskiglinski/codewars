/*
 * Reverse List Order
 * https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b
 */

export function reverseList(list: number[]): number[] {
  const result: number[] = [];

  while (list.length) {
    result.push(list.pop() as number);   
  }
  
  return result;
}

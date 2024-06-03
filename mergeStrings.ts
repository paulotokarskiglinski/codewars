/*
 * Merge overlapping strings
 * https://www.codewars.com/kata/61c78b57ee4be50035d28d42
 */

export const mergeStrings = (first: string, second: string): string => {
  let overlap: number = 0;
  
  for (let i = 1; i <= first.length; i++) {
    if (second.startsWith(first.slice(-i))) {
      overlap = i;
    }
  }
  
  return first += second.slice(overlap);
}

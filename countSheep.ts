/**
 * If you can't sleep, just count sheep!!
 * https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
 */

export const countSheep = (num: number): string => {
  let result: string = '';
  
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;    
  }

  return result;
}

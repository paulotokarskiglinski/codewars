/*
 * CSV representation of array 
 * https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
 */

export const toCsvText = (array: number[][]): string => array.join('\n');

// Solution 1
// export const toCsvText = (array: number[][]): string => {
//   let result: string = '';

//   for (const [index, value] of array.entries()) {
//     result += value.toString();
    
//     if (index < array.length - 1) {
//       result += '\n';
//     }
//   }
  
//   return result;
// }

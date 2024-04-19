/*
* CamelCase Method
* https://www.codewars.com/kata/587731fda577b3d1b0001196
*/

export const camelCase = (str: string): string => str.split(' ').map((word: string) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`).join('');

// Solution 1
// export function camelCase(str: string): string {
//   let result = ''
//   const arr = str.split(' ');
  
//   for (let word of arr) {
//     const aux = word.charAt(0).toUpperCase();
//     result += `${aux}${word.substring(1, word.length).toLowerCase()}`;
//   }

//   return result;
// }

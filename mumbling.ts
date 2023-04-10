/*
* Mumbling
* https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
*
* This time no story, no theory. The examples below show you how to write function accum:
* Examples:
* accum("abcd") -> "A-Bb-Ccc-Dddd"
* accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
* accum("cwAt") -> "C-Ww-Aaa-Tttt"
* The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

export const accum = (s: string): string => s.split('').map((value, index) => index === 0 ? value.toUpperCase() : value.toLowerCase().repeat(index)).join('-');

// Solution 2
// export function accum(s: string): string {
//   let result: string = '';
//   const arr: string[] = s.split('');
//   for (let c = 0; c < arr.length; c++) {
//     for (let i = 0; i < c + 1; i++)
//       result += i === 0 ? arr[c].toUpperCase() : arr[c].toLowerCase();
//     result += c < arr.length - 1 ? '-' : '';
//   }
//   return result;
// }
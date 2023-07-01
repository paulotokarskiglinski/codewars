/* 
* Simple Pig Latin
* https://www.codewars.com/kata/520b9d2ad5c005041100000f
*
* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
* 
* Examples
* pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
* pigIt('Hello world !');     // elloHay orldway !
*/

export const pigIt = (str: string): string => str.split(' ').map((word: string) => word.match(/[A-z]/gi) ? word.slice(1) + word.charAt(0) + 'ay' : word).join(' ');
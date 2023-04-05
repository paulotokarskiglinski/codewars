/*
* Find the missing letter
* https://www.codewars.com/kata/5839edaa6754d6fec10000a2
*
* Find the missing letter
* Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
* 
* You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
* The array will always contain letters in only one case.
* 
* Example:
* ['a','b','c','d','f'] -> 'e'
* ['O','Q','R','S'] -> 'P'
*/

export const findMissingLetter = (array: string[]): string => {
  const isUpper: boolean = array[0] === array[0].toUpperCase();
  const alphabet: string = isUpper ? 'abcdefghijklmnopqrstuvwxyz'.toUpperCase() : 'abcdefghijklmnopqrstuvwxyz';
  
  for (let i = 0, index = alphabet.indexOf(array[0]); i < array.length; i++, index++)
    if (array[i] !== alphabet[index])
      return alphabet[index];
  
  return '';
}
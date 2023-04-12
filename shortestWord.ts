/*
* Shortest Word
* https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
*
* Simple, given a string of words, return the length of the shortest word(s).
* String will never be empty and you do not need to account for different data types.
*/

export const findShort = (s: string): number => s.split(' ').reduce((acc, x) => acc = x.length < acc ? x.length : acc, Number.MAX_VALUE);
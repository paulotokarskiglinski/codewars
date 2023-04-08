/*
* Get the Middle Character
* https://www.codewars.com/kata/56747fd5cb988479af000028
*
* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
* #Examples:
* Kata.getMiddle("test") should return "es"
* Kata.getMiddle("testing") should return "t"
*/

export function getMiddle(s: string): string {
  const middle = (s.length % 2 === 0) ? (s.length / 2) - 1 : (s.length - 1) / 2;
  return s.slice(middle, middle + (s.length % 2 === 0 ? 2 : 1));
}
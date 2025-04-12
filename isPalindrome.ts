/*
 * Is it a palindrome?
 * https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
 */

export const isPalindrome = (x: string): boolean => {
  let i = 0;
  let j = x.length - 1;
  x = x.toLowerCase();
  
  while (x[i++] === x[j--]) {
    if (i >= j) {
      return true;
    }
  }

  return false;
}

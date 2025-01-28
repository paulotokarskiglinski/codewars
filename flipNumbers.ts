/**
 * Reversing Fun
 * https://www.codewars.com/kata/566efcfbf521a3cfd2000056
 */

const flipNumber = (n: string): string => {
  let result = '';
  let arr = n.split('');
  
  while (arr.length > 0) {
    result += arr.pop();
    arr = arr.reverse();
  }

  return result;
}

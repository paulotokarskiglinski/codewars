/*
* Count characters in your string
* https://www.codewars.com/kata/52efefcbcdf57161d4000091
*
* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
* What if the string is empty? Then the result should be empty object literal, {}.
*/

export const count = (str: string): any => {
  const map: any = {};
  
  str.split('').forEach((item) => {
    map[item] = map[item] ? map[item]++ : 1;
  });
    
  return map;
}
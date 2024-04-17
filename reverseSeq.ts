/*
* Reversed sequence
* https://www.codewars.com/kata/5a00e05cc374cb34d100000d 
*/

export const reverseSeq = (n: number): number[] => {
  const result: number[] = [];
  
  while(n >= 1) {
    result.push(n--);
  }
  
  return result;
};

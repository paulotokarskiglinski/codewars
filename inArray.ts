/*
* Which are in?
* https://www.codewars.com/kata/550554fd08b86f84fe000a58
*/

export const inArray = (a1: string[], a2: string[]): string[] => {
  const result = [];

  for (const s1 of a1) {
    for (const s2 of a2) {
      if (s2.includes(s1)) {
        result.push(s1);
        break;
      }
    }  
  }
  
  return result.sort();
}

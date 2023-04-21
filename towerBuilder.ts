/*
* Build Tower
* https://www.codewars.com/kata/576757b1df89ecf5bd00073b
* 
* Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
* For example, a tower with 3 floors looks like this:
* [
*   "  *  ",
*   " *** ", 
*   "*****"
* ]
*/

export const towerBuilder = (nFloors: number): string[] => {
  if (nFloors === 1)
    return ['*'];
  
  let result: string[] = [];
  
  for (let i = 0, j = nFloors; i < nFloors; i++, j--)
    result.push(' '.repeat((j > 1 ? j - 1 : 0)) + '*'.repeat((i > 0 ? i * 2 + 1 : 1)) + ' '.repeat((j > 1 ? j - 1 : 0)));
  
  return result;
}
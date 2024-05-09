/*
 * Find the smallest
 * https://www.codewars.com/kata/573992c724fc289553000e95
 */

export const smallest = (n: number): number[] => {
  const strNum = n.toString();

  let first = 0;
  let last = 0;
  let smallest = n;
  
  for (let i = 0; i < strNum.length; i++) {
    for (let j = 0; j < strNum.length; j++) {
      const aux = strNum.split('');
      aux.splice(i, 1);
      aux.splice(j, 0, strNum[i]);
      
      const num = parseInt(aux.join(''));
      if (num < smallest) {
        smallest = num;
        first = i;
        last = j;
      }
    }
  }
  
  return [smallest, first, last];
}

console.log(smallest(261235), 'should return [126235, 2, 0]');
console.log(smallest(209917), 'should return [29917, 0, 1]');
console.log(smallest(285365), 'should return [238565, 3, 1]');
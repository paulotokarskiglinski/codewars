/*
* Find the odd int
* https://www.codewars.com/kata/54da5a58ea159efa38000836
*
* Given an array of integers, find the one that appears an odd number of times.
* There will always be only one integer that appears an odd number of times.
*/

export const findOdd = (xs: number[]): number => xs.find((x, i, a) => a.filter(y => y === x).length % 2 !== 0) || 0;

// Solution 2
// export const findOdd = (xs: number[]): number => {
//   const map: any = {};
//   let odd: number = 0;
//
//   for (let i = 0; i < xs.length; i++)
//     map[xs[i]] = map[xs[i]] ? map[xs[i]] += 1 : 1;
//
//   for (let k in map)
//     if (map[k] % 2 !== 0)
//       odd = parseInt(k);
//
//   return odd;
// };
/*
* Find The Parity Outlier
* https://www.codewars.com/kata/5526fc09a1bbd946250002dc
*
* You are given an array (which will have a length of at least 3, but could be very large) containing integers.
* The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
* Write a method that takes the array as an argument and returns this "outlier" N.
*/

export const findOutlier = (integers: number[]): number => {
  const totalEven = integers.filter(x => x % 2 === 0);
  return totalEven.length === 1 ? totalEven[0] : integers.filter(x => x % 2 !== 0)[0];
}
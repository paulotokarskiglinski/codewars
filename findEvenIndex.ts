/*
* Equal Sides Of An Array
* https://www.codewars.com/kata/5679aa472b8f57fb8c000047
*
* You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
* 
* For example:
* Let's say you are given the array {1,2,3,4,3,2,1}:
* Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
* 
* Input:
* An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
* 
* Output:
* The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
* 
* Note:
* If you are given an array with multiple answers, return the lowest correct index.
*/

export const findEvenIndex = (arr: number[]): number => {
  let sum1: number = 0;
  let sum2: number = 0;
  let index: number = -1;
  let endIndex: number = 0;

  while (endIndex < arr.length) {
    for (let i = -1; i <= endIndex; i++)
      sum1 += arr[i] || 0;

    for (let i = endIndex; i < arr.length; i++)
      sum2 += arr[i];

    index += 1;
    endIndex += 1;

    if (sum1 === sum2)
      return index;
    else if (sum1 === 0 && sum2 === 0)
      return 0;

    sum1 = sum2 = 0;
  }

  return -1;
}
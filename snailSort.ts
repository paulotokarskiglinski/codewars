/*
* Snail Sort
* https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
*
* Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
* array = [[1,2,3],
*          [4,5,6],
*          [7,8,9]]
* snail(array) #=> [1,2,3,6,9,8,7,4,5]
*/

export const snail = (array: any): number[] => {
  const result: number[] = [];

  while (array.length > 0) {
    if (array.length > 0)
      result.push(...array.shift());

    for (let i = 0; i < array.length; i++)
      result.push(array[i].pop());

    if (array.length > 0)
      result.push(...array.pop().reverse());

    for (let i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }

  return result;
}
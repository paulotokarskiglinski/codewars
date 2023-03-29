/*
* Moving Zeros To The End
* https://www.codewars.com/kata/52597aa56021e91c93000cb0
*
* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*
* moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

export const moveZeros = (arr: any[]): any[] => {
  let length = arr.length;

  for (let i = length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  
  return arr;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
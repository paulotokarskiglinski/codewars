/*
 * Array plus array
 * https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
 */

export const arrayPlusArray = (arr1 : number[], arr2 : number[]) : number => [...arr1, ...arr2].reduce((acc: number, value: number) => acc + value, 0);

// Solution 1
// export const arrayPlusArray = (arr1 : number[], arr2 : number[]) : number => {
//   const arr = [...arr1, ...arr2];
  
//   let sum = 0;
//   let i = 0;
//   let j = arr.length - 1;
  
//   while (i <= j) {
//     sum = i !== j ? sum + arr[i] + arr[j] : sum + arr[i];
    
//     i++;
//     j--;
//   }
  
//   return sum;
// }

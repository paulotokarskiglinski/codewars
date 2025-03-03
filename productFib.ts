/*
 * Product of consecutive Fib numbers
 * https://www.codewars.com/kata/5541f58a944b85ce6d00006a
 */

// Solution 2
export const productFib = (prod:number): [number,number,boolean] => {
  let prevValue = 0;
  let nextValue = 1;

  while (prevValue * nextValue < prod) {
    const aux = prevValue;
    prevValue = nextValue;
    nextValue = aux + nextValue;
  }

  return [prevValue, nextValue, prevValue * nextValue === prod];
}

// Solution 1
// export const productFib = (prod: number): [number, number, boolean] => {
//   let result = 0;
//   let f = [0, 1, 1];

//   while (result <= prod) {
//     f.push(f[f.length - 1] + f[f.length - 2]);

//     result = f[f.length - 1] * f[f.length - 2];
    
//     if (result >= prod) {
//       return [f[f.length - 2], f[f.length - 1], result === prod];
//     }
//   }

//   return [-1, -1, false];
// }

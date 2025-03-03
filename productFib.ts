/*
 * Product of consecutive Fib numbers
 * https://www.codewars.com/kata/5541f58a944b85ce6d00006a
 */

export const productFib = (prod: number): [number, number, boolean] => {
  let result = 0;
  let f = [0, 1, 1];

  while (result <= prod) {
    f.push(f[f.length - 1] + f[f.length - 2]);

    result = f[f.length - 1] * f[f.length - 2];
    
    if (result >= prod) {
      return [f[f.length - 2], f[f.length - 1], result === prod];
    }
  }

  return [-1, -1, false];
}

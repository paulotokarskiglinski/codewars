/*
* Tribonacci Sequence
* https://www.codewars.com/kata/556deca17c58da83c00002db
*
* Well met with Fibonacci bigger brother, AKA Tribonacci.
* As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
*/

export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  if (n < 3)
    return [a, b, c].splice(0, n);
  
  let arr: number[] = [a, b, c];
  
  for (let i = 0; i < n - 3; i++)
    arr.push(arr[i] + arr[i + 1] + arr[i + 2]);
  
  return arr;
}
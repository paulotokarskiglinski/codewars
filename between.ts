/*
 * What is between?
 * https://www.codewars.com/kata/55ecd718f46fba02e5000029
 */

export const between = (a: number, b: number): number[] => {
  const res: number[] = [];
  
  for (let i = a; i <= b; i++) {
    res.push(i);
  }
  
  return res;
}

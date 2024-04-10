/*
* Beginner - Reduce but Grow
* https://www.codewars.com/kata/57f780909f7e8e3183000078
*/

export const grow = (arr: number[]): number => arr.reduce((acc: number, value: number) => acc *= value, 1);

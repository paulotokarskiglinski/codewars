/*
* Sum Arrays
* https://www.codewars.com/kata/53dc54212259ed3d4f00071c
*/

export const sum = (numbers: number[]): number =>  numbers.reduce((acc, value) => acc + value, 0);

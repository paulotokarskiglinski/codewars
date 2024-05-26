/*
 * Sum Mixed Array
 * https://www.codewars.com/kata/57eaeb9578748ff92a000009
 */

export const sumMix = (x: any[]): number => x.reduce((acc: number, value: any) => acc += parseInt(value) , 0);

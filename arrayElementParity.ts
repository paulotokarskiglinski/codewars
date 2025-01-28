/**
 * Array element parity
 * https://www.codewars.com/kata/5a092d9e46d843b9db000064
 */

export const solve = (arr: number[]): number => arr.filter(i => !arr.includes(i * -1))[0];

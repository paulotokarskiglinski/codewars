/*
 * What's the real floor?
 * https://www.codewars.com/kata/574b3b1599d8f897470018f6
 */

export const getRealFloor = (n: number): number => n <= 0 ? n : n <= 13 ? n - 1 : n - 2;

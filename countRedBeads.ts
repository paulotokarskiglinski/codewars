/*
 * Simple beads count 
 * https://www.codewars.com/kata/58712dfa5c538b6fc7000569
 */

export const countRedBeads = (n: number): number => n < 2 ? 0 : (n * 2) - 2;

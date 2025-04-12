/*
 * Grasshopper - Personalized Message
 * https://www.codewars.com/kata/5772da22b89313a4d50012f7
 */

export const greet = (name: string, owner: string): string => `Hello ${name === owner ? 'boss' : 'guest'}`;

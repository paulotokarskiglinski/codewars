/*
 * Is it a letter?
 * https://www.codewars.com/kata/57a06b07cf1fa58b2b000252
 */

export const isItLetter = (character: string): boolean => /^[a-zA-Z]$/.test(character);

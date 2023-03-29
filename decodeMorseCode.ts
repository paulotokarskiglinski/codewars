/*
* Decode the Morse code
* https://www.codewars.com/kata/54b724efac3d5402db00065e
*
* In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
*/

import { MORSE_CODE } from './preloaded';
export const decodeMorse = (morseCode: string): string => morseCode.split('   ').map(x => x.split(' ').map(y => MORSE_CODE[y]).join('')).join(' ').trim();
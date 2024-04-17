/*
* Fake Binary
* https://www.codewars.com/kata/57eae65a4321032ce000002d
*/

export const fakeBin = (x: string): string => x.split('').map((a: string) => parseInt(a) < 5 ? '0' : '1').join('');

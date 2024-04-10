/*
* Testing 1-2-3
* https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
*/

export const number = (array: string[]): string[] => array.map((item: string, index: number) => `${index + 1}: ${item}`);

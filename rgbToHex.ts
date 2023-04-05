/*
* RGB To Hex Conversion
* https://www.codewars.com/kata/513e08acc600c94f01000001
* 
* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a * hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
*
* Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/

export const rgb = (r: number, g: number, b: number): string => ((Math.max(0, Math.min(r, 255))).toString(16).padStart(2, '0') + (Math.max(0, Math.min(g, 255))).toString(16).padStart(2, '0') + (Math.max(0, Math.min(b, 255))).toString(16).padStart(2, '0')).toUpperCase();

// Solution 2
// const round = (value: number): number => {
//   if (value > 255)
//     return 255;
//   if (value < 0)
//     return 0;
//   return value;
// }
// export function rgb(r: number, g: number, b: number): string {
//   const red = round(r).toString(16).padStart(2, '0');
//   const green = round(g).toString(16).padStart(2, '0');
//   const blue = round(b).toString(16).padStart(2, '0');
//   return (red + green + blue).toUpperCase();
// }
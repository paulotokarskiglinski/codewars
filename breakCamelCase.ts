/* Break camelCase
* https://www.codewars.com/kata/5208f99aee097e6552000148 
* 
* Complete the solution so that the function will break up camel casing, using a space between words.
* 
* Example
* "camelCasing"  =>  "camel Casing"
* "identifier"   =>  "identifier"
* ""             =>  ""
*/
export const breakCamelCase = (str: string): string => {
  let result: string = '';

  str.split('').forEach((char: string) => {
    result += char.match(/[A-Z]/) ? ' ' + char : char;
  });

  return result;
}
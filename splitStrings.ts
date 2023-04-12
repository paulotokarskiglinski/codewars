/*
* Split Strings
* https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
*
* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
* Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

export const solution = (str: string): string[] => {
  let result: string[] = [];
  const arr: string[] = str.split('');

  for (let i = 0; i < arr.length; i += 2)
    result.push(arr[i] + (arr[i + 1] || '_'))

  return result;
}
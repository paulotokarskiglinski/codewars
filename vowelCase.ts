/*
 * The Vowel Code
 * https://www.codewars.com/kata/53697be005f803751e0015aa
 */

export function encode(string: string): string {
  const arr = string.split('');

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'a': arr[i] = '1'; break;
      case 'e': arr[i] = '2'; break;
      case 'i': arr[i] = '3'; break;
      case 'o': arr[i] = '4'; break;
      case 'u': arr[i] = '5'; break;
      default: break;
    }
  }
  
  return arr.join('');
}

export function decode(string: string): string {
  const arr = string.split('');

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '1': arr[i] = 'a'; break;
      case '2': arr[i] = 'e'; break;
      case '3': arr[i] = 'i'; break;
      case '4': arr[i] = 'o'; break;
      case '5': arr[i] = 'u'; break;
      default: break;
    }
  }
  
  return arr.join('');
}

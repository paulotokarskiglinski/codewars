/*
 * GA-DE-RY-PO-LU-KI cypher
 * https://www.codewars.com/kata/592a6ad46d6c5a62b600003f
 */

export function encode(str: string): string {
  let result: string = '';
  const chars: string[] = str.split('');
  
  for (let char of chars) {
    switch (char) {
      case 'G': {
        result += 'A';
        break;
      }
      case 'g': {
        result += 'a';
        break;
      }
      case 'A': {
        result += 'G';
        break;
      }
      case 'a': {
        result += 'g';
        break;
      }
      case 'D': {
        result += 'E';
        break;
      }
      case 'd': {
        result += 'e';
        break;
      }
      case 'E': {
        result += 'D';
        break;
      }
      case 'e': {
        result += 'd';
        break;
      }
      case 'R': {
        result += 'Y';
        break;
      }
      case 'r': {
        result += 'y';
        break;
      }
      case 'Y': {
        result += 'R';
        break;
      }
      case 'y': {
        result += 'r';
        break;
      }
      case 'P': {
        result += 'O';
        break;
      }
      case 'p': {
        result += 'o';
        break;
      }
      case 'O': {
        result += 'P';
        break;
      }
      case 'o': {
        result += 'p';
        break;
      }
      case 'L': {
        result += 'U';
        break;
      }
      case 'l': {
        result += 'u';
        break;
      }
      case 'U': {
        result += 'L';
        break;
      }
      case 'u': {
        result += 'l';
        break;
      }
      case 'K': {
        result += 'I';
        break;
      }
      case 'k': {
        result += 'i';
        break;
      }
      case 'I': {
        result += 'K';
        break;
      }
      case 'i': {
        result += 'k';
        break;
      }
      default: {
        result += char;
        break;
      }
    }
  }
  
  return result;
}

export function decode(str: string): string { 
  return encode(str);
}

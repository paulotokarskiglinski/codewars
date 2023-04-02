/*
* Rot13
* https://www.codewars.com/kata/530e15517bc88ac656000716
*
* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
* Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

const rot13 = (message: string): string => {
  let result: string = '';
  const alphabetLower: string = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetUpper: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let m of message.split('')) {
    let index: number;
    if (alphabetLower.includes(m) || alphabetUpper.includes(m)) {
      if (m === m.toUpperCase()) {
        index = alphabetUpper.indexOf(m);
        result += alphabetUpper[index >= 13 ? index - 13 : index + 13];
      } else {
        index = alphabetLower.indexOf(m);
        result += alphabetLower[index >= 13 ? index - 13 : index + 13];
      }
    } else
      result += m;
  }

  return result;
}
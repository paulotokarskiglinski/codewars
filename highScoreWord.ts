/* 
* Highest Scoring Word
* https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
*
* Given a string of words, you need to find the highest scoring word.
* Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
* For example, the score of abad is 8 (1 + 2 + 1 + 4).
* You need to return the highest scoring word as a string.
* If two words score the same, return the word that appears earliest in the original string.
* All letters will be lowercase and all inputs will be valid.
*/

export const high = (str: string): string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  let maxIndex: number = 0;
  let max: number = Number.MIN_VALUE;
  const list: string[] = str.split(' ');
  
  list.forEach((word: string, index: number) => {
  	let sum = word.split('').reduce((sum: number, char: string) => sum += alphabet.indexOf(char) + 1, 0);

    if (sum > max) {
    	max = sum;
    	maxIndex = index;
    }
  })

  return list[maxIndex];
}

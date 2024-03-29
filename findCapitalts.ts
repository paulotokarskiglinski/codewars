/*
* Find the capitals
* https://www.codewars.com/kata/539ee3b6757843632d00026b
* 
* Instructions
* Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
* 
* Example (Input --> Output)
* "CodEWaRs" --> [0,3,4,6]
*/

export const capitals = (word: string): number[] => {
	let index: number = 0;
  const result: number[] = [];

  for (const letter of word) {
    if (letter === letter.toUpperCase()) {
      result.push(index)
    }
    index++;
  }

  return result as number[];
}

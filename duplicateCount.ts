/*
* Count the number of Duplicates
* https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
*
* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

export const duplicateCount = (text: string): number => {
  let hashChars: any = {};
  let arrChars: string[] = text.toLocaleLowerCase().split('');

  for (let char of arrChars)
    hashChars[char] = !hashChars[char] ? 1 : ++hashChars[char];

  return Object.values(hashChars).filter((x: number) => x && x > 1).length;
}

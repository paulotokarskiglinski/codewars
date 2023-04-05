export function duplicateCount(text: string): number{
  // separete the text into an object (hash map)
  // ignore case sensitive
  // loop and count for every occurence of each character
  // find how many of the characters has more than 1 occurence
  // return this value
  
  const hashChars = {};
  const arrChars = text.toLocaleLowerCase().split('');

  for (let char of arrChars)
    hashChars[char] = !hashChars[char] ? 1 : ++hashChars[char];

  console.log(Object.values(hashChars))

  return 0;
}

console.log('#1', duplicateCount('abcde'))
console.log('#2', duplicateCount('indivisibility'))
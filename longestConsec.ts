/*
* Consecutive strings
* https://www.codewars.com/kata/56a5d994ac971f1ac500003e
*/

export const longestConsec = (strarr: string[], k: number): string => {
  if (k <= 1 || strarr.length < k) {
    return '';
  }
  
  let longest = '';
  for (let i = 0; i < strarr.length; i++) {
    let concat = strarr[i];
    for (let j = i + 1; j < i + k; j++) {
      if (strarr[j]) {
        concat = `${concat}${strarr[j]}`;
      }
    }
    if (concat.length > longest.length) {
      longest = concat;
    }
  }

  return longest;
}

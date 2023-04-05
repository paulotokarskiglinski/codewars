/* 
* Scramblies
* https://www.codewars.com/kata/55c04b4cc56a697bb0000048
*
* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
* Notes:
* Only lower case letters will be used (a-z). No punctuation or digits will be included.
* Performance needs to be considered.
* Examples
* scramble('rkqodlw', 'world') ==> True
* scramble('cedewaraaossoqqyt', 'codewars') ==> True
* scramble('katas', 'steak') ==> False
*/

export const scramble = (str1: string, str2: string): boolean => {
  let hash1: any = {};
  let hash2: any = {};
  
  for (let i of str1)
    hash1[i] = hash1[i] ? hash1[i] += 1 : 1;
  
  for (let i of str2)
    hash2[i] = hash2[i] ? hash2[i] += 1 : 1;
  
  for (let i in hash2)
    if (!hash1.hasOwnProperty(i) || hash1[i] < hash2[i])
      return false;

  return true;
}
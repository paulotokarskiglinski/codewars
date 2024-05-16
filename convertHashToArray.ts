/*
 * Convert Hash To An Array
 * https://www.codewars.com/kata/59557b2a6e595316ab000046
 */

export const convertHashToArray = (hash: any): any[] => {
  const result: any = [];
  const keys: string[] = Object.keys(hash).sort();
  
  for (const key of keys) {
    result.push([key, hash[key]]);
  }
  
  return result;
}

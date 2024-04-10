/*
* Count of positives / sum of negatives
* https://www.codewars.com/kata/576bb71bbbcf0951d5000044
*/

export const countPositivesSumNegatives = (input: any): [number, number] | any => {
  if (!input?.length) {
    return [];
  }

  let sumNegatives: number = 0;
  let countPositives: number = 0;
  
  for (const item of input) {
    if (item > 0) {
      countPositives++;
    } else {
      sumNegatives += item;
    }
  }
  
  return [countPositives, sumNegatives];
}

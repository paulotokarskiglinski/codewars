/*
 * Check the exam
 * https://www.codewars.com/kata/5a3dd29055519e23ec000074 
 */

export const checkExam = (array1: string[], array2: string[]): number => {
  let sum = 0;
  
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] !== '') {
      if (array1[i] === array2[i]) {
        sum += 4;
      } else {
        sum -= 1;
      }
    }
  }
  
  return sum < 0 ? 0 : sum;
}

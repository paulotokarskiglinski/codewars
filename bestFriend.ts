/*
 * A Letter's Best Friend
 * https://www.codewars.com/kata/64fc03a318692c1333ebc04c
 */

export const bestFriend = (txt: string, a: string, b: string): boolean => {
  const arr = txt.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a && arr[i + 1] !== b) {
      return false;
    }
  }

  return true;
}

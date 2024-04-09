/*
* Beeramid
* https://www.codewars.com/kata/51e04f6b544cf3f6550000c1
*/

export const beeramid = (bonus: number, price: number): number => {
  let level = 1;
  let cans = Math.floor(bonus / price);
  
  while (cans > 0) {
    const row = level * level;
    
    if (row > cans) {
      return level - 1;
    }

    cans -= row;
    level++;
  }
  
  return level - 1;
}

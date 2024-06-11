/*
 * Greed is Good
 * https://www.codewars.com/kata/5270d0d18625160ada0000e4
 */

export const score = (dice: number[]): number => {
  let result: number = 0;
  const counts = {
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
    count5: 0,
    count6: 0
  };

  for (const value of dice) {
    switch (value) {
        case 1: {
          counts.count1++;

          if (counts.count1 === 3) {
            result += 800;
            counts.count1 = 0;
          } else {
            result += 100;
          }

          break;
        }
        case 2: {
          counts.count2++;
          
          if (counts.count2 === 3) {
            result += 200;
            counts.count3 = 0;
          }

          break;
        }
        case 3: {
          counts.count3++;
          
          if (counts.count3 === 3) {
            result += 300;
            counts.count3 = 0;
          }

          break;
        }
        case 4: {
          counts.count4++;
          
          if (counts.count4 === 3) {
            result += 400;
            counts.count4 = 0;
          }

          break;
        }
        case 5: {
          counts.count5++;

          if (counts.count5 === 3) {
            result += 400;
            counts.count5 = 0;
          } else {
            result += 50;
          }

          break;
        }
        case 6: {
          counts.count6++;
          
          if (counts.count6 === 3) {
            result += 600;
            counts.count6 = 0;
          }

          break;
        }
    }
  }
  
  
  return result;
}

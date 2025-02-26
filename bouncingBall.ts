/*
 * Bouncing Balls
 * https://www.codewars.com/kata/5544c7a5cb454edb3c000047
 */

export const bouncingBall = (h: number, bounce: number, window: number): number => {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let count = 1;
  h *= bounce;

  while (h > window) {
    count += 2;
    h *= bounce;
  }

  return count;
}

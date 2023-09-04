/**
 * Build a pile of Cubes
 * https://www.codewars.com/kata/5592e3bd57b64d00f3000047
 */

export function findNb(m: number): number {
  let n = 1;
  let volume = 0;

  while (volume < m) {
    volume += Math.pow(n, 3);

    if (volume === m)
      return n;

    n++;
  }

  return -1;
}

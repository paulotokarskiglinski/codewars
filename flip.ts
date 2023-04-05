function flip(dir: string, arr: number[]): number[] {
  return arr.sort((a, b) => dir === 'R' ? a - b : b - a);
}

console.log(flip('R', [3, 2, 1, 2]));
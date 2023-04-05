export class Kata {
  static highAndLow(numbers: string): string {
    let arr = numbers.split(' ').map(x => parseInt(x));
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }
}

console.log('#1', Kata.highAndLow('1 2 3'), 'should return 3 1');
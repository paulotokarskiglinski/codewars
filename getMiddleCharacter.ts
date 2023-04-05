export function getMiddle(s: string): string {
  const middle = (s.length % 2 === 0) ? (s.length / 2) - 1 : (s.length - 1) / 2;
  return s.slice(middle, middle + (s.length % 2 === 0 ? 2 : 1));
}

console.log('#1', getMiddle('test'), 'should return `es`');
console.log('#2', getMiddle('testing'), 'should return `t`');
console.log('#3', getMiddle('A'), 'should return `A`');

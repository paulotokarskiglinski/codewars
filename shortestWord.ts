export function findShort(s: string): number {
  return s.split(' ').reduce((acc, x) => acc = x.length < acc ? x.length : acc, Number.MAX_VALUE);
}

console.log('#1', findShort('abc a acbcd'), 'shoud be 1');
console.log('#2', findShort('bitcoin take over the world maybe who knows perhaps'), 'shoud be 3');

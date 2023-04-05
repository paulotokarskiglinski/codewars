function solution(str: string, ending: string): boolean {
  return str.slice(str.length - ending.length) === ending;
}

console.log('#1', solution('abc', 'bc'), true);
console.log('#2', solution('abc', 'd'), false);
console.log('#3', solution('test', 't'), true);
function nbDig(n: number, d: number): number {
  let result: number = 0;

  for (let i = 0; i <= n; i++)
    result += (i ** 2).toString().split(d.toString()).length - 1;

  return result;
}

console.log('#1', nbDig(10, 1), 'should be 4');
console.log('#1', nbDig(25, 1), 'should be 11');
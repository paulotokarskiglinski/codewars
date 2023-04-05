export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
  let years: number = 0;
  let percn: number = percent / 100;

  while (p0 < p) {
    console.log(p0)
    p0 += p0 * percn + aug | 0;
    years++;
  }

  return years;
}

console.log('#1', nbYear(1500000, 0, 10000, 2000000), 'should be 50')
console.log('#2', nbYear(1000, 2, 50, 1214), 'should be 4')
//  console.log(p0, percent, aug, p)
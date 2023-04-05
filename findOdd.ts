// export const findOdd = (xs: number[]): number => {
//   const map: any = {};
//   let odd: number = 0;

//   for (let i = 0; i < xs.length; i++)
//     map[xs[i]] = map[xs[i]] ? map[xs[i]] += 1 : 1;

//   for (let k in map)
//     if (map[k] % 2 !== 0)
//       odd = parseInt(k);

//   return odd;
// };

export const findOdd = (xs: number[]): number => xs.find((x, i, a) => a.filter(y => y === x).length % 2 !== 0) || 0;

console.log('#1', findOdd([1,1,1,1,1,1,10,1,1,1,1]), 'should be `10`');
console.log('#2', findOdd([1, 1, 2]), 'should be `2`')
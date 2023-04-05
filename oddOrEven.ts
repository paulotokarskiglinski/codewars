export const oddOrEven = (array: number[]) => (array.reduce((sum, value) => sum + value, 0)) % 2 === 0 ? 'even' : 'odd';

console.log(oddOrEven([0, 1, 2]))
console.log(oddOrEven([0]))
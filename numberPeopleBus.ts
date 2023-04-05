export const number = (busStops: [number, number][]): number => busStops.reduce((sum: number, [p1, p2]) => sum += p1 - p2, 0);

console.log(number([[10,0],[3,5],[5,8]]))
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
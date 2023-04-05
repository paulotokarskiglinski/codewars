const listFiltering = (nums: any[]): number[] => nums.filter(x => typeof(x) === 'number');

console.log('#1', listFiltering([1,2,'a','b']), 'should be [1, 2]')
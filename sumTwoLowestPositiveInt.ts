const sumTwoSmallestNumbers = (numbers: number[]): number => {
  const min1 = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min1), 1);
  const min2 = Math.min(...numbers);

  return min1 + min2;
}

console.log('#1', sumTwoSmallestNumbers([1, 2, 3]), 'should be 3')
console.log('#2', sumTwoSmallestNumbers([1, 2, 2]), 'should be 3')
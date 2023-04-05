function productArray(nums: number[]): number[] {
  let skip: number = 0;
  let result: number[] = [];
  
  while (skip < nums.length) {
    let total: number = 1;
    
    for (let i = 0; i < nums.length; i++)
      if (skip !== i)
        total *= nums[i];

    result.push(total);
    skip++;
  }

  return result;
}

console.log('#1', productArray([12, 20]), [20, 12]);
console.log('#2', productArray([10,3,5,6,2]), [180,600,360,300,900]);
/*
* Product Array (Array Series #5)
* https://www.codewars.com/kata/5a905c2157c562994900009d
*
* Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
*
* productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
* Explanation:
* The first element 180 is the product of all array's elements except the first element 10
* The second element 600 is the product of all array's elements except the second element 3
* The Third element 360 is the product of all array's elements except the third element 5
* The Fourth element 300 is the product of all array's elements except the fourth element 6
* Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2
*/

export const productArray = (nums: number[]): number[] => {
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
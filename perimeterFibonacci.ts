/*
* Perimeter of squares in a rectangle
* https://www.codewars.com/kata/559a28007caad2ac4e000083
*
* The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. 
* It's easy to see that the sum of the perimeters of these squares is:
* ---> 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
*/

const fibonacci = (n: number): number[] => {
  const result = [1, 1];

  for (let i = 2; i <= n; i++)
    result[i] = result[i - 2] + result[i - 1];

  return result;
}

export const perimeter = (n: number): number => fibonacci(n).reduce((sum, value) => sum + value, 0) * 4;
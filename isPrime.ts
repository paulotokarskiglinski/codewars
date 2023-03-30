/*
* Is a number prime?
* https://www.codewars.com/kata/5262119038c0985a5b00029f
*
* Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
* Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

export const isPrime = (num: number): boolean => {
  for (let i = 2; i ** 2 <= num; i += 3)
    if (num % i === 0 || num % (++i) === 0 || num % (++i) === 0)
      return false;
  return num >= 2;
}

// Solution 2
// export const isPrime = (num: number): boolean => {
//   if (num === 2 || num === 3)
//     return true;
//   if (num <= 1 || num % 2 === 0 || num % 3 === 0)
//     return false;
//   else {
//     for (let i = 5; i ** 2 <= num; i += 6) {
//       console.log(i, i ** 2, num)
//       if (num % i == 0 || num % (i + 2) == 0)
//         return false;
//     }
//     return true;
//   }
// }

// Solution 3
// function isPrime(num) {
//   if (num <= 1 || (num !== 2 && num % 2 === 0) || (num !== 3 && num % 3 === 0))
//     return false;
//   for (let i = 5; i ** 2 <= num; i += 6)
//     if (num % i === 0 || num % (i + 2) === 0)
//       return false;
//   return true;
// }
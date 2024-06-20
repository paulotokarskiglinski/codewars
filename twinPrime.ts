/*
 * The search for Primes! Twin Primes!
 * https://www.codewars.com/kata/596549c7743cf369b900021b
 */

export const twinPrime = (n: number): number => {
  let count: number = 0;
  
  if (n <= 2) {
    return 0;
  }
  
  for (let i = 3; i <= n; i++) {
    if (checkPrime(i - 1) && checkPrime(i + 1)) {
      count++;
    }
  }
  
  return count;
}
  
const checkPrime = (n: number): boolean => {
  for (var i = 2; i < n; i++) {
  	if (n % i === 0) {
      return false;
    }
  }

  return true;
}

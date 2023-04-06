/*
* Are they the "same"?
* https://www.codewars.com/kata/550498447451fbbd7600041c
*
* Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements,
* with the same multiplicities (the multiplicity of a member is the number of times it appears). 
* "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
*
* Examples
* Valid arrays
* a = [121, 144, 19, 161, 19, 144, 19, 11]  
* b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
*/

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 === null || a2 === null)
    return false;
  else if (a1.length === 0 && a2.length === 0)
    return true;
  else {
    let countMap: any = {};
    
    for (let i of a1)
      countMap[i] = countMap[i] ? countMap[i] += 1 : 1;
    
    for (let i of a2) {
      const sqrt: number = Math.sqrt(i);
      
      if (countMap[i])
        countMap[i]--;
      if (countMap[sqrt])
        countMap[sqrt]--;
    }

    return Math.max(... Object.values(countMap) as number[]) === 0;
  }
}
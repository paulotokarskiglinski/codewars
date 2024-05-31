/*
 * Sort an array by value and index 
 * https://www.codewars.com/kata/58e0cb3634a3027180000040
 */

export const sortByValueAndIndex = (array: number[]) : number[] => {
  const products = array.map((value, index) => ({ value, product: value * (index + 1) }));
  
  products.sort((a, b) => a.product - b.product);
  
  return products.map(item => item.value);
}

/*
 * Reverse or rotate?
 * https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991
 */

// Version 2
export const revRot = (s: string, sz: number): string => {
  if (sz <= 0 || s === '' || sz > s.length) {
    return '';
  }
  
  const chunks: string[] = [];
  
  for (let i = 0; i < s.length; i += sz) {
    const chunk = s.slice(i, i + sz);
    if (chunk.length === sz) {
      chunks.push(chunk);
    }
  }
  
  const result: string[] = [];
  for (const item of chunks) {
    const itemSplit = item.split('');
    const sum = itemSplit.reduce((acc, value) => acc + parseInt(value), 0);
    
    if (sum % 2 === 0) {
      result.push(itemSplit.reverse().join(''));
    } else {
      result.push(item.slice(1) + item[0])
    }
  }
  
  return result.join('');
}

// Version 1
// export const revRot = (s: string, sz: number): string => {
//   if (sz <= 0 || s === '' || sz > s.length) {
//     return '';
//   }
  
//   let i: number = 0;
//   let res: string = '';
//   const chunks: string[] = [];

//   while (s.length >= sz) {
//     res += s.slice(i, ++i);
    
//     if (res.length === sz) {
//       chunks.push(res);
//       s = s.slice(i, s.length);
//       i = 0;
//       res = '';
//     }
//   }
  
//   const result: string[] = [];
//   for (const item of chunks) {
//     const itemSplit = item.split('');
//     const sum = itemSplit.reduce((acc, value) => acc + parseInt(value), 0);
    
//     if (sum % 2 === 0) {
//       result.push(itemSplit.reverse().join(''));
//     } else {
//       let res: string = '';
//       for (let i = 1; i < itemSplit.length; i++) {
//         res += itemSplit[i];
//       }
//       res += itemSplit[0];
//       result.push(res);
//     }
//   }
  
  return result.join('');
}

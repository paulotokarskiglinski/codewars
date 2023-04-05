export const solution = (str: string): string[] => {
  let result: string[] = [];
  const arr: string[] = str.split('');

  for (let i = 0; i < arr.length; i += 2)
    result.push(arr[i] + (arr[i + 1] || '_'))

  return result;
}

console.log(solution('abc'), ['ab', 'c_'])
console.log(solution('abcdef'), ['ab', 'c_'])
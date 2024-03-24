export const solution = (number: string): number => {
  const map: Record<string, number> = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  };

  let result = 0;
  for (let i = 0; i < number.length; i++) {
    const symbol1 = map[number[i]];
    const symbol2 = map[number[i + 1]];

    if (symbol2 && symbol2 > symbol1) {
      result += symbol2 - symbol1;
      i++;
    } else {
      result += symbol1;
    }
  }

  return result;
}

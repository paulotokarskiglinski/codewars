/**
 * Valid Braces
 * https://www.codewars.com/kata/5277c8a221e209d3f6000b56
 */

export const validBraces = (braces: string): boolean => {
  const stack: string[] = [];
  const mapEndBraces: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (const brace of braces) {
    if (brace === '(' || brace === '[' || brace === '{') {
      stack.push(brace);
    } else if (stack.length === 0 || stack.pop() !== mapEndBraces[brace]) {
      return false;
    }
  }

  return stack.length === 0;
}

/*
 * Multiplication - Generators #2
 * https://www.codewars.com/kata/5637ead70013386e30000027
 */

export function* generator(a: number): Generator<string> {
  let b = 1;

  while (true) {
    const result = a * b;
    yield `${a} x ${b} = ${result}`;
    b++;
  }
}

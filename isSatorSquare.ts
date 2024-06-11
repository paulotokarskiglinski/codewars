/*
 * Is Sator Square?
 * https://www.codewars.com/kata/5cb7baa989b1c50014a53333
 */

export const isSatorSquare = (tablet: string[][]): boolean => {
  const size = tablet.length;

  if (tablet.some(row => row.length !== size)) {
    return false;
  }

  for (let i = 0; i < size / 2; i++) {
    const row = tablet[i].join();
    const reversedRow = tablet[size - 1 - i].slice().reverse().join();
    const column = tablet.map(row => row[i]).join();
    const reversedColumn = tablet.map(row => row[size - 1 - i]).slice().reverse().join();

    if (row !== reversedRow || column !== reversedColumn || row !== column || reversedRow !== reversedColumn) {
      return false;
    }
  }

  return true;
}

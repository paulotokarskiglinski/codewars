/*
* Help the bookseller!
* https://www.codewars.com/kata/54dc6f5a224c26032800005c
*/

export const stockList = (listOfArt: string[], listOfCat: string[]): string => {
  if (!listOfArt.length) {
    return '';
  }

  const map = {};
  for (const category of listOfCat) {
    map[category] = 0;
  }

  for (const article of listOfArt) {
    const letter = article.charAt(0);
    const value = parseInt(article.split(' ')[1]);

    if (map[letter] >= 0) {
      map[letter] += value;
    }
  }

  let result = '';
  let count = 0;
  for (const key of Object.keys(map)) {
    result += `(${key} : ${map[key]})`;
    count++;

    if (count < Object.keys(map).length) {
      result += ' - '
    }
  }

  return result;
}

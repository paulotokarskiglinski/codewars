/*
* Growth of a Population
* https://www.codewars.com/kata/563b662a59afc2b5120000c6
*
* In a small town the population is p0 = 1000 at the beginning of a year. 
* The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
* How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
*/

export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
  let years: number = 0;
  let percn: number = percent / 100;

  while (p0 < p) {
    console.log(p0)
    p0 += p0 * percn + aug | 0;
    years++;
  }

  return years;
}
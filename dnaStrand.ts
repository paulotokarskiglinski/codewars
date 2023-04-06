/*
* Complementary DNA
* https://www.codewars.com/kata/554e4a2f232cdd87d9000038
*
* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions"
* for the development and functioning of living organisms.
*
* Example: (input --> output)
* "ATTGC" --> "TAACG"
* "GTAT" --> "CATA"
*/

export class Kata {
  static dnaStrand(dna: string) {
    return dna.split('').map(x => ({ 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' })[x]).join('');
  }
}

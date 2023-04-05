export class Kata {
  static dnaStrand(dna: string) {
    return dna.split('').map(x => ({ 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' })[x]).join('');
  }
}

console.log('#1', Kata.dnaStrand('ATTGC'), 'should be `TAACG`')
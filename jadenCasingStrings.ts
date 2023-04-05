String.prototype.toJadenCase = function (): string {
  return this.split(' ').map((x: string) => x[0].toUpperCase() + x.slice(1)).join(' ');
}

interface String {
  toJadenCase(): string;
}

console.log('test Test'.toJadenCase());

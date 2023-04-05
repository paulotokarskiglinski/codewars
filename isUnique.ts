function isUnique(value: string): boolean {
  const hashChars: any = {};
  const arrChars = value.split('');

  for (let char of arrChars) {
    if (hashChars[char] === 1)
      return false;
    
    hashChars[char] = 1;
  }

  return true;
}

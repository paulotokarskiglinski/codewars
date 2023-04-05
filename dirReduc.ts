export const dirReduc = (arr: string[]): string[] => {
  const mapDirections: any = { "NORTH": "SOUTH", "SOUTH": "NORTH", "WEST": "EAST", "EAST": "WEST" };

  for (let i = 0; i < arr.length; i++) {
    if (mapDirections[arr[i]] === arr[i + 1]) {
      arr.splice(i, 2);
      i = -1;
    }
  }

  return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), 'should be [WEST]')
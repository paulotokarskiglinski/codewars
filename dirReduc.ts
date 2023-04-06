/*
* Directions Reduction
* https://www.codewars.com/kata/550f22f4d758534c1100025a
*
* Once upon a time, on a way through the old wild mountainous west...
* ... a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
* Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
*/

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

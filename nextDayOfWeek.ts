/**
 * Simple Fun #149: Next Day Of Week
 * https://www.codewars.com/kata/58aa9662c55ffbdceb000101
 */

export const nextDayOfWeek = (currentDay: number, availableWeekDays: nunber): number => {
  const available = availableWeekDays.toString(2).padStart(7, '0').split('').reverse();

  for (let i = 0; i < 7; i++) {
    const nextDay = (currentDay + i) % 7;
    if (available[nextDay] === "1") {
      return nextDay + 1;
    }
  }
}

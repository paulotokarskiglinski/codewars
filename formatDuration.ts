/*
* Human readable duration format
* https://www.codewars.com/kata/52742f58faf5485cae000b9a
*
* Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
* The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
* It is much easier to understand with an example:
* For seconds = 62, your function should return 
*    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
*    "1 hour, 1 minute and 2 seconds"
*/

export const formatDuration = (seconds: number): string => {
  if (seconds === 0)
    return 'now';

  const MINUTE = 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const YEAR = DAY * 365;

  const years = Math.floor(seconds / YEAR);
  seconds %= YEAR;
  const days = Math.floor(seconds / DAY);
  seconds %= DAY;
  const hours = Math.floor(seconds / HOUR);
  seconds %= HOUR;
  const minutes = Math.floor(seconds / MINUTE);
  seconds %= MINUTE;

  const components: string[] = [];
  if (years > 0)
    components.push(years === 1 ? "1 year" : `${years} years`);
  if (days > 0)
    components.push(days === 1 ? "1 day" : `${days} days`);
  if (hours > 0)
    components.push(hours === 1 ? "1 hour" : `${hours} hours`);
  if (minutes > 0)
    components.push(minutes === 1 ? "1 minute" : `${minutes} minutes`);
  if (seconds > 0)
    components.push(seconds === 1 ? "1 second" : `${seconds} seconds`);

  const formattedDuration = components.join(", ");
  return components.length > 1 ? formattedDuration.replace(/,([^,]*)$/, " and$1") : formattedDuration;
}
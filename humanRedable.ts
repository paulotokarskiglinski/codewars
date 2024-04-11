/*
* Human Readable Time
* https://www.codewars.com/kata/52685f7382004e774f0001f7
*/

export const humanReadable = (seconds: number): string => {
  const hours: number = Math.floor(seconds / 3600);
  const minutes: number = Math.floor((seconds % 3600) / 60);
  const secs: number = seconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

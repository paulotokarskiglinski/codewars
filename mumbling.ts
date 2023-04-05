export function accum(s: string): string {
  // let result: string = '';
  // const arr: string[] = s.split('');

  // for (let c = 0; c < arr.length; c++) {
  //   for (let i = 0; i < c + 1; i++) {
  //     if (i === 0 && c !== 0)
  //       result += '-';

  //     result += i === 0 ? arr[c].toUpperCase() : arr[c].toLowerCase();
  //   }
  // }

  // return result;

  return s.split('').map((value, index) => index === 0 ? value.toUpperCase() : value.toLowerCase().repeat(index)).join('-');
}

console.log('#1', accum('abcd'), 'should be `A-Bb-Ccc-Dddd`')
console.log('#2', accum('RqaEzty'), 'should be `R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy`')
console.log('#3', accum('ZpglnRxqenU') === 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu', 'should be `true`')
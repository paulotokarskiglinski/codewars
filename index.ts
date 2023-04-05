function digitalRoot(n:number): number {
  var sum = 0;
  var arr: string[] = [];

  arr = n.toString().split('');

  for (let i of arr)
    sum += parseInt(i);
    
  if (sum >= 10)
    return digitalRoot(sum)
  
  return sum;
};


console.log(digitalRoot(16))
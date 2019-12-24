function binarySearch(data, target)
{
  let i = 0, j = data.length, k;
  
  while (i < j)
  {  k = Math.floor((i+j)/2);
    if (target <= data[k]) j = k;
    else i = k+1;
  }
  
  if (data[ i ] === target) return i;
  else return -1;
}


const data = [3,4,5,6,7,8,9];
const target = 8;
let closestPoint = binarySearch(data, target);
console.log(closestPoint);
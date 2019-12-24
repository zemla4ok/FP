const binarySearch = (data, target, start, end) => {
  if (end < 1) return data[0];
  const middle = Math.floor(start + (end - start) / 2);
  if (target == data[middle]) return middle;
  if (end - 1 === start) return Math.abs(data[start] - target) > Math.abs(data[end] - target) ? data[end] : data[start];
  if (target > data[middle]) return binarySearch(data, target, middle, end);
  if (target < data[middle]) return binarySearch(data, target, start, middle);
}

const data = [3,4,5,6,7,8,9];
const target = 8;
let closestPoint = binarySearch(data, target, 0, data.length - 1);
console.log(closestPoint);


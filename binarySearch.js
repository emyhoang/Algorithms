const binarySearch = (arr, num) => {
  let left = arr[0]
  let right = arr.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] === num) {
      return true;
    } else if (num < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return false;
}
console.log(binarySearch([1, 3, 5, 8, 12, 15, 25], 12))



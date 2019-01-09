// Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr) {
  var temp;
  var count = 1;
  for (var i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - count];
    arr[arr.length - count] = temp;
    count++;
  }
  return arr;
}
console.log(reverse([5, 1, 4, 3, 2]));
console.log(reverse([1, 2, 3, 4]));

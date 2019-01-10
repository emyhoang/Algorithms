// Double Vision - Given array, create a function to return a new array where 
// each value in the original has been doubled. 
// Calling double([1, 2, 3]) should return [2, 4, 6] without changing original.

function doubleVision(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= 2;
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(doubleVision([1, 4, 6]));

// Previous Lengths - You are passed an array containing strings.  
// Working within that same array, replace each string with a number
// the length of the string at previous array index - and return the array.
// For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].

function previousLengths(arr) {
  var newArr = [arr[0]];
  for (i = 1; i < arr.length; i++) {
    var previousString = arr[i - 1];
    var previousStringLength = previousString.length;
    newArr.push(previousStringLength);
  }
  return newArr;
}

console.log(previousLengths(['hello', 'cat', 'dog']))

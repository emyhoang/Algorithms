// Evens and Odds - Create a function that accepts an array. 
// Every time that array has three odd values in a row, print "That's odd!".
// Every time the array has three evens in a row, print "Even more so!"


function timesThree(arr) {
  var oddCount = 0;
  var evenCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else if (arr[i] % 2 === 1) {
      oddCount++;
    }
  }
  if (evenCount >= 3) {
    console.log("Even more so!");
  }
  if (oddCount >= 3) {
    console.log("That's odd!");
  }
  return arr
}
console.log(timesThree([1, 3, 5, 2, 4, 6]));

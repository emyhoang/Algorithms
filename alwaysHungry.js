// Always Hungry - Create a function that accepts an array, 
// and prints "yummy" each time one of the values is equal 
// to "food".  If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(arr) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'food') {
      count++;
    }
  }
  if (count === 0) {
    return 'i am hungry';
  } else if (count > 0) {
    return 'yummy';
    count--;
  }
}
console.log(alwaysHungry(['food', 1, '2']));


function reverse(str) {
  var str = str.split('');
  var temp;
  var count = 1;
  for (var i = 0; i < str.length / 2; i++) {
    temp = str[i];
    str[i] = str[str.length - count];
    str[str.length - count] = temp;
    count++;
  }
  return str.join('');
}
console.log(reverse('cat'));
console.log(reverse('dog'));
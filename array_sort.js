var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
console.log("a = " +a + "  b = " +b);
  var c= a - b;
  console.log("c = " +c);
  return c;
});
console.log(numbers);

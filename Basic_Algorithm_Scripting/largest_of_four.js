
function largestOfFour(arr) {
  // You can do this!
 return arr.map(function(curr){
   return curr.reduce(function(max,value){
     return value > max ? value : max;
   },0);
  });
 // return arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

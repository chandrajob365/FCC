function findLongestWord(str){
  var strArr = str.split(' ');
  /*var max = strArr[0].length;
  for(var i =0 ; i< strArr.length ; i++){
    console.log(strArr[i]);
    if(max < strArr[i].length){
      max = strArr[i].length;
    }
  }
  return max;*/
  return strArr.reduce(function(max , curr){
    return curr.length>max? curr.length : max;
  },0);
}

console.log(findLongestWord('The quick brown fox jumpedeeeee over the lazy dog'));

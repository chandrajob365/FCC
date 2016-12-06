function palindrome(str){
  var newStr = str.replace(/\W|_/gi , '').toUpperCase();
  console.log(newStr);
  var revStr = newStr.split('').reverse().join('');
  console.log(revStr);
  return revStr==newStr;
  //return newStr.split('').reverse().join('') == newStr;

}

console.log(palindrome("A man, a plan, a canal. Panama"));

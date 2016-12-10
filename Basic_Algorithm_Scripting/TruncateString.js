function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num<=3){
   return str.slice(0,num).concat('.'.repeat(3));
  }else if(num >= str.length ){
    return str;
  }else{
    return str.slice(0,num-3).concat('.'.repeat(3));
  }
  //return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));

function titleCase(str){
  return str.split(' ').map(function(curr){
    return curr[0].toUpperCase().concat(curr.slice(1,curr.length).toLowerCase());
  }).join(' ');
}
console.log(titleCase("sHoRt AnD sToUt"));

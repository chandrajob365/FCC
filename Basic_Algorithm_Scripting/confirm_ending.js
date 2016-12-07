function confirmEnding(str, target) {
  var lastpart = str.substr(-(target.length) , str.length).replace(/ /ig ,'');
  console.log(lastpart);
  return target == lastpart;
}

console.log(confirmEnding("Bastian", "n"));

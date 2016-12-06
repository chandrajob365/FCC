//Normal way
function factorialize(num) {
  if(num>=0){
    var product =1;
    while(num>0){
      product = product*num;
      num--;
    }
    return product;
  }else{
    return "Factorial not possible for "+num;
  }
}

console.log(factorialize(0));

//Recursive way
function recursFactorialize(num){
  if(num>=0){
    if(num==0){
      return 1;
    }else{
      return num*recursFactorialize(num-1);
    }
  }else{
      return "Factorial not possible for "+num;
  }

}

console.log(recursFactorialize(0));

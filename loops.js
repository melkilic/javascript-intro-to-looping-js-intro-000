function forLoop(array){
 for(let i =0; i<25 ; i++){
  if(i===1){
  array.push("I am 1 strange loop.");

}else{
  array.push("I am 24 strange loops.");
  }
}
return array;
}

function whileLoop(number){
  while (number > 0) {
    console.log(--number);
  }
return 'done';
}

function doWhileLoop(num) {
  var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < num);
    return num;


do {
  console.log("I run once regardless.")
} while (incrementVariable()=num);
  return num;
}

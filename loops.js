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
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    console.log("I run once regardless.")
  } while (num.length=0 && maybeTrue());
    return num;


do {
  console.log("I run once regardless.")
} while (num.length=10 && maybeTrue());
  return num;
}

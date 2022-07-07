let input = require('fs').readFileSync('example.txt').toString().trim()
let num = input;
let count=0;
function f(){
  for(let i=1; i<=num ; i++){
    if(i<10){
      count++;
    }else if(10<=i && 100 > i){
      count++;
    }else{
      let a = (Math.floor(i / 100));
      let b = (Math.floor((i % 100) / 10));
      let c = (i % 10);
      if((a-b)===(b-c)){
        count++;
      }
    }
  }
  console.log(count);
}
f();
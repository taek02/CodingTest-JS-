let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
let arr = [a,b,c];
let max = 0;
let money=0;
if(a===b && a===c && b===c){
  money = 10000+a*1000;
}else if((a===b && a!==c && b!==c) || (a===c && a!==b && c!==b) || (b===c && a!==c && a!==b)){
  if(a===b){
    money = 1000 + a * 100;
  }else if(a===c){
    money = 1000 + a * 100;
  }else if(b===c){
    money = 1000 + b + 100; 
  }
}else{
  for(let i=0 ; i<arr.length; i++){
    if(max<arr[i]){
      max = arr[i];
    }
  }
  money = max * 100;
}
console.log(money);
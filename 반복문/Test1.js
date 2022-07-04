// 14번
let input = require('fs').readFileSync('Test_1_example.txt').toString().trim().split('');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let origin = (10*a) + b;
let new_num=0;
let count = 0;
if(input[0] < 10 && input[1] < 10){
  while(true){
    new_num = (b*10)+((a+b)%10);
    a = parseInt(new_num/10);
    b = new_num%10;
    count++;
    if(new_num === origin){
      console.log(count);
      break;
    }
  }
}else{
  b=a;
  a=0;
  origin = (10*a) + b;
  while(true){
    new_num = (b*10)+((a+b)%10);
    a = parseInt(new_num/10);
    b = new_num%10;
    count++;
    if(new_num === origin){
      console.log(count);
      break;
    }
  }
}
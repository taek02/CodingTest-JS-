// 1번
let input = require('fs').readFileSync('Test3_example.txt').toString().trim().split(' ');
let a = parseInt(input[0]);
for(let i=1; i<10 ; i++){
  console.log(a, "*", i ,"=" , a*i);
}
let input = require('fs').readFileSync("example.txt").toString().split('\n');
let arr = new Array(parseInt(input[0]));
let m=0;
let sum=0;
for(let i=0; i<arr.length; i++){
  arr[i] = parseInt(input[1].split(' ')[i]);
}
for(let i=0; i<arr.length;i++){
  if(m<=arr[i]){
    m = arr[i];
  }
}
for(let i=0; i<arr.length;i++){
  sum += arr[i]/m*100;
}
console.log(sum/parseInt(input[0]));
let input = require('fs').readFileSync("1차원 배열/Test1_example.txt").toString().split('\n');
let arr = new Array(9);
let max = 0;
let max_index = 0;
for(let i=0; i<arr.length;i++){
  arr[i]=parseInt(input[i]);
}

for(let i=0; i<arr.length;i++){
  if(max<=arr[i]){
    max = arr[i];
    max_index = i+1;
  }
}
console.log(max);
console.log(max_index);
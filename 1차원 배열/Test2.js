/*let input = require('fs').readFileSync('example.txt').toString().split('\n');
let arr = new Array(10);
let remain_arr = new Array(10);
let count = 0;
let same = -1;
for(let i=0; i<arr.length;i++){
  arr[i]=parseInt(input[i]);
}

for(let i=0; i<arr.length;i++){
  remain_arr[i]=arr[i]%42;
}

for(let i=0; i<arr.length;i++){
  for(let j=i; j<arr.length;j++){
    if(arr[i]===arr[j]){
      same = 1;
    }
  }
  if(same===-1){
    count++;
  }
}
console.log(count);
*/
const fs = require('fs');
const input = fs.readFileSync("1차원 배열/Test2_example.txt").toString().trim().split('\n').map(val=>+val);
const arr = input.map((el)=> el%42 );
const set = new Set(arr);
const uniqueArr = [...set];
console.log(uniqueArr.length);
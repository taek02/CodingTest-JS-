let fs = require('fs');
let inputs = fs.readFileSync('DP/Test1_example.txt').toString().split('\n');
let target = inputs[0];
let arr = [0,1,2];

for(let i=3; i<=inputs[0]; i++){
    arr[i]= (arr[i-1]+ arr[i-2])%10007;
}
let result = arr[target]
console.log(result);

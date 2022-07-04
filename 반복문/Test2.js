// 5번
let input = require('fs').readFileSync('Test2_example.txt').toString().trim().split(' ');
let a = parseInt(input[0]);
for(let i=1 ; i<=a ; i++){
  console.log(i);
}

//let input = Number(require('fs').readFileSync('/dev/stdin').toString());
//
//let answer = '';
//
//for (let i = 1; i <= input; i++) {
//    answer += i + "\n";
//}
//
//console.log(answer);
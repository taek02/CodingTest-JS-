let fs = require('fs'); 
let input = fs.readFileSync('백트래킹/Test2_example.txt').toString().split(" "); 
// let input = fs.readFileSync('/dev/stdin').toString().split(" "); // 제출코드

let a = Number(input[0]);
let b = Number(input[1]);
let arr = [];
let result = '';

function nm(count) {
    if (count == b) {
        result += `${arr.join(' ')}\n`;
        return;
    }
    for (let i = 0; i < a; i++) {
      arr.push(i+1);
      nm(count+1);
      arr.pop();
  }
}

nm(0);
console.log(result);
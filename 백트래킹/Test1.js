let fs = require('fs'); 
let input = fs.readFileSync('백트래킹/Test1_example.txt').toString().trim().split(" "); 
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
    for (let i = 1; i <= a; i++) {
      if (!arr.includes(i)) {
        arr.push(i);
        nm(count+1);
        arr.pop();
    }
  }
}

nm(0);
console.log(result);
let input = require('fs').readFileSync('브루트 포스/Test2_example.txt').toString()
let target = input;
let final_sum;
    for(let i=1; i<=1000000;i++){
        let sum = 0;
        let result_num = 0;
        const str = i.toString();
        let str_num = str.split("");
        for(let j=0; j<str_num.length;j++){
            sum+=(Number(str_num[j]));
        }
        result_num = i+sum;
        if(result_num === Number(target)){
            console.log(i);
            break;
        }
        if (i === 1000000) {
            console.log(0);
          }
    }
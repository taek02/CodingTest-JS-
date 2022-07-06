let input = require('fs').readFileSync("1차원 배열/Test4_example.txt").toString().split('\n');
  for(let i=1; i<=parseInt(input[0]);i++){
    let count=0;
    let sum=0;
    let per=0;
    let arr = new Array(parseInt(input[i]));
  for(let j=0; j<arr.length;j++){
    arr[j]= parseInt(input[i].split(' ')[j+1]);
    sum = sum + arr[j];
  }
  for(let k=0; k<arr.length;k++){
    if(arr[k] > sum/arr.length){
      count++;
    }
  };
  per = (100*(count/arr.length));
  let result = per.toFixed(3);
  console.log(`${result}%`);
}
//'/dev/stdin'
let input = require('fs').readFileSync('example.txt').toString().split('\n');
let curr_hour = parseInt(input[0].split(' ')[0]);
let curr_min = parseInt(input[0].split(' ')[1]);
let cook_time = parseInt(input[1]);
let finish_hour = 0;
let finish_min = 0;

if(curr_min + (cook_time % 60) >= 60){
  finish_min = (curr_min + (cook_time % 60))%60;
  finish_hour = parseInt(curr_hour + (curr_min+cook_time)/60)
  if(finish_hour >= 24){
    finish_hour = finish_hour%24;
  }
  }else{
    finish_hour = curr_hour;
    finish_min = curr_min+cook_time;
    if(finish_hour >= 24){
      finish_hour = finish_hour%24;
    }
}
console.log(finish_hour, finish_min)

// 두번째 방법 근데 생각해보니까 이건 조건문을 안 썼네요...패스!
//let curr_hours = parseInt(input[0].split(' ')[0]);
//let curr_mins = parseInt(input[0].split(' ')[1]);
//let cook_times = parseInt(input[1]);
//let finish_hours = 0;
//let finish_mins = 0;
//let sum_time = (curr_hours*60) + curr_mins + cook_times;
//finish_hours = parseInt(sum_time/60);
//finish_mins = sum_time % 60;
//console.log(finish_hours, finish_mins)

//let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//var current = input[0].split(" ").map(Number);

//var currentHour = current[0];
//var currentMinute = current[1];
//var cook = Number(input[1]);

//var cookMinute = currentMinute + cook;
//var cookHour = currentHour;

//if (cookMinute >= 60) {
//  var temp = parseInt(cookMinute / 60);
//  cookHour += temp;
//  cookMinute = cookMinute - temp * 60;
//  if (cookHour >= 24) {
//    cookHour -= 24;
//  }
//  console.log(cookHour + " " + cookMinute);
//} else {
//  console.log(currentHour + " " + cookMinute);
//}
const input = require("fs").readFileSync("집합과 맵/Test1_example.txt").toString().split("\n"); //'/dev/stdin'

arrA = input[1].trim().split(" ").map(Number);
arrB = input[2].trim().split(" ").map(Number);

const setA = new Set(arrA);
const setB = new Set(arrB);

const dif1 = new Set([...setA].filter((x) => !setB.has(x)));
const dif2 = new Set([...setB].filter((x) => !setA.has(x)));

console.log(dif1.size + dif2.size)
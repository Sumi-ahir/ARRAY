let prompt = require('prompt-sync')();

let input = prompt('enter array element, separated by space: ');
let arr = input.split(" ").map(Number);

let temp = arr[arr.length - 1];

for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = temp;

console.log(arr);

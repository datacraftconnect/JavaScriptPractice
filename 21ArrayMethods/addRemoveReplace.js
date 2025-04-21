//push(),pop(),shift(),unshift(),splice()
//add or remove elements - it will affect the original array
let arr = [1,2,3,4];
//remove last elements
let poppedVal = arr.pop();
console.log(arr); // 1, 2, 3 ]
console.log(poppedVal); //4
//adding element at last
arr.push(500,200);
console.log(arr); // [ 1, 2, 3, 500, 200 ]
//shift - remove 1st element
arr.shift();
console.log(arr); // [ 1, 2, 3, 500, 200 ]
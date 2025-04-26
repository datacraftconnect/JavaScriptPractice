//this used for merging array - concat(),slice(),flat(),fill()
let arr = [1,2,3,4];
let arr1 = [5,6];

let newArr = arr.concat(arr1);
console.log(newArr);
let newArr1 = arr.concat(10,20,30);
console.log(newArr1);
let newArr2 = [].concat(arr);
console.log(newArr2)

//Slice Method
let newArr3 = [10,20,30,40,50];
let slicedVal = newArr3.slice();

console.log(slicedVal);

newArr3[1] = 111

console.log(slicedVal,newArr3);

let slicedVal1 = newArr3.slice(1);
let slicedVal14 = newArr3.slice(1,4);
console.log(slicedVal1,slicedVal14);

//Flat Method - flattening nested array

let nestArr = [1,2,3,[10,20,30]];
let newFlatArr = nestArr.flat()
console.log(newFlatArr)

let nestArr1 = [1,2,3,[10,[20,30]]];
let newFlatArr1 = nestArr.flat(Infinity)
console.log(newFlatArr1)

//Fill Method

let fillArr = [10,20,30];
fillArr.fill(101);
console.log(fillArr);
fillArr.fill(12,0,2);
console.log(fillArr);

fillArr.fill()
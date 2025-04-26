let arr = [10,20,30,40,10];
let newIndex = arr.indexOf( 10 ) //starts from left to right & show only the index of 1st occurance
console.log(newIndex)
//
let newIndex1 = arr.indexOf( 10,2 ) //defining start from index 2
console.log(newIndex1)

//lastIndex() - searches from right to left

let newIndex2 = arr.lastIndexOf( 40 ) //starts from left to right & show only the index of 1st occurance
console.log(newIndex2)
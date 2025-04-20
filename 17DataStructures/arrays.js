//Arrays are ordered collections of elements that can be accessed by their index.
//Stores multiple values , non premetive types
//can hold different data types - its homogeneous & hetrogeneous values
let hetro = ['apple', 1, {id:1}];
console.log(hetro[2]);
//Defining using Array Constructor
let newArray = new Array()
newArray[0] = "First"
newArray[1] = "secondElement"
console.log(newArray);
// Creating an array
let fruits = ['apple', 'banana', 'cherry'];

// Accessing elements
console.log(fruits[0]); // Output: apple
console.log(fruits.length);
// Adding elements
fruits.push('date');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// Removing elements
fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

//Dense Array
let denseArray = [1,2,3,4] //memory address is assigned properly (baseAddress +(index*size)) - they use contigious memory
console.log(denseArray);
//Parse Array
let sparseArray = [10,20,,30,40] //manage empty elements with hash map logic

console.log(sparseArray);
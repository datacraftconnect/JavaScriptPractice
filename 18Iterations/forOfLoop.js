//Array
let arr = [10,100,1000,10000];

for(let val of arr){
    console.log(val);
};

//String
let str = "JavaScript";
for(let i of str){
    console.log(i);
};

//generator function
function* genFunction(){
    yield 1
    yield 12
    yield 123
}

let iterator = genFunction();

for(let i of iterator){
    console.log(i);
}

//Object - returns error - TypeError: obj is not iterable for which we use for in loop
let obj = {
    id:123,
    uName:"Karthik"
}

for(let i of obj){
    console.log(i);
}
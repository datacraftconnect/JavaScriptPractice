//Named Functions - it has name & block
function print(){
    console.log("this is a named function");
}
print()
// Anonymous Function - it has function keyword function(), but it doesn't have name & will be assigned it to var
//
let anaFun = function (){
console.log("This anonymous function")
}
anaFun();
// Arrow Functions - it doesn't have keywords and also name 
//if its 2 parameters we need to use ()
let arrowfun = (a,b) => console.log("This is arrow function " + (a*b))
arrowfun(10,20)
//if its 1 parameters we no need to use ()
let arrowfun1 = uName => console.log("This is arrow function name is " + uName)
arrowfun1("Karthik")

//Higher order function & Call back function, calling function with an function
function1(function2()) //here function2() is call back & function 1 is higher order function
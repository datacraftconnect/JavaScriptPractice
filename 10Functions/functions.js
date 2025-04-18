//Declaration, Parameters, Argument, closure, return/Non Return Type
//Lets create an object
let person1 = {
    name1: "John",
    age: 40
}

//without parameters & Non Return Type
function printUserName(){
    console.log("Hello Everyone",person1.name1, person1.age);
}
printUserName()
//with parameters/arguments
function printUserName1(uName,uAge){
        console.log(`Hi ${uName}, your age is ${uAge}`);
}
printUserName1("Karthik",30)
printUserName1("Komagal",20)
printUserName1("Komagal") //Hi Komagal, your age is undefined - to overcome we have default parameters
//with default parameters/arguments
function printUserName2(uName,uAge=21){
    console.log(`Hi ${uName}, your age is ${uAge}`);
}
printUserName2("Nilan")
//Return Type
function findRectArea(l,b){
    console.log("Finding Area")
    return l*b;
}
console.log(findRectArea(10,20));

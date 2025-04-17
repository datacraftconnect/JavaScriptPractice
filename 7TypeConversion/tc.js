//Type Conversion - 
//Implicit TC - it will automatically converted 
//Explicit TC - we use methods to convert it

let str = "45";
let num = 100;
console.log( str + num ); //4500 implicit convertsion
console.log(typeof(str + num)); //string

//string + anythings is string & same way the other way
console.log( "Hi" + true ) //Hitrue
console.log( "Hi" + null ) //Hinull
console.log( "Hi" + [1,2] ) //passing array > Hi1,2
console.log( "Hi" + {"x":1} ) //passing array > Hi[object,object]

//numbers
console.log( 10 + true ) //11
console.log( 10 + false ) //10
console.log( 10 + undefined ) //NaN - Not as number
console.log( 10 + [1] ) //101
console.log(typeof(10 + [1])) //string
console.log(typeof(10 + {})) //string

//Explicit Convertion
console.log(10 + Number("10")); //20
console.log( Number("") ); //0
console.log( Number("abc") ); //NaN
console.log( Boolean("abc") ); //true
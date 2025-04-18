//Variable Declaration hoisting
//When the script runs all the declared variables goes at the top of the scirpt.
//variable declared with var, are declared & initialized at top
//while variable declared with let & const are only declared at top & making it as temporal dead zone.

//while hoisting variable comes to top
//var a

console.log(a); // it will not throws error even a declared after this, but it will get initialized with value undefined
var a = 10;
console.log(a);

console.log(b); // it will throws error as b declared after this & same for const
let b = 20;
console.log(b); 


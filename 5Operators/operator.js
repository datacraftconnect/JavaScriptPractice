//Arithimatic Operator
console.log( 10 + 10);
console.log( 10 - 5 );
console.log( 10 * 5 );
console.log( 10 / 5 );
console.log( 10 % 5 );
console.log( 3 ** 2 );

//Increment, Decrement

let num = 50
num++;
console.log( num )
let decNum = 15
decNum--;
console.log( decNum )

// Post Increment
/*
1.substitute
2.Operation
3.increment
*/
let num2 = 20;
let num3 = num2++
console.log( num2, num3 ) //21 20
console.log( num2 ) //21 
let num4 = num2++ + num2++ //21 + 22
console.log( num2 ) //23
console.log( num4 )
// Pre INcrement
// 1. substitute with increment
// 2. operation

let newNum = 40;
let newNum1 = ++newNum; 
console.log( newNum, newNum1 ); //41 41 
console.log( newNum ); //41
let newNum3 = ++newNum + ++newNum; //42 43 
console.log( newNum3 ); //85

//similarly for Post/Pre Decrement

//AssignmentOperator
let age1 = 20;
age1 += 10;
// age1 -= 10;
// age1 *= 10;
// age1 /= 10;
console.log( age1 );

//RelationalOperator
console.log( 10 < 20 ) //Less than
console.log( 20 <= 20 ) //Less than or equal to
console.log( 20 == 20 ) //equal to i.e only value check
console.log( 20 === '20' ) //strict equal to i.e. value with datatype check
console.log( 20 != 21 ) //Not equal to
console.log( 20 !== '20' ) //Strict Not equal to

//Logical Operator - Multiple conditions
//Logical And (&&)
//Logical OR (||)
//logical not (!)


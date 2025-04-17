//If Statement, if-else, If-else,if-else, ternary operator, switch, nested if-else

//if statement
let uAge = 25;
if (uAge >= 18) {
    console.log( "He is eligible to vote" )
}
//if else 
let uAge1 = 15;
if (uAge1 >= 18) {
    console.log( "He is eligible to vote" )
}
else {
    console.log( "He is not eligible to vote" )
}

//if else if 
let hour = 12;
if (hour>=1 && hour<=6){
    console.log("Early Morning")
}
else if (hour>=7 && hour<=12){
    console.log("Morning")
}
else if (hour>=13 && hour<=18){
    console.log("Noon")
}
else if (hour>=19 && hour<=24){
    console.log("Night")
}
else {
    console.log( "it is not a valid hour")
}

//switch
let trafficLight = "red";
switch( trafficLight ){
    case "red": console.log("stop");
    break;
    case "yellow": console.log("slow down");
    break;
    case "green": console.log("go"); 
    break;
    default : console.log("Pay Fine");
    break;
}
//Swithc fall through method

//Nested if else
let age = 18;
let height = 150;
let weight = 55;

if(age >=18 ) {
    if(height <=150){
        if(weight >= 55){
            console.log("you are selected")
        } else {
            console.log("weight is not valid")
        }
    }
    else{
        console.log("Height is not valid");
    }
}
else{
    console.log("Age is not valid");
}

//Ternary Operator
let pwd_input = true;
pwd_input ? console.log("welcome to website") : console.log("password is incorrect"); 
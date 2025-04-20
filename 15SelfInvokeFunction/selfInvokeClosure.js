//function will get executed without call it. eg. like discount's on amazon landing page
//normal function
function normalFun(){
    console.log("execute when ever i call");
}
normalFun();

//Selfinvoke function or IIFE - immediately invoked function expression.
(function (userName, age) {
    console.log("self invoke function", userName+age);
})("Karthik",30)

//closure, we can access outer scope variable in inner function

function outerFunction(){
    let outerVariable = "Im from outer scope"
    function innerFunction() {
        console.log ( outerVariable);
    }
    return innerFunction;
}

let innerFun = outerFunction()
innerFun();
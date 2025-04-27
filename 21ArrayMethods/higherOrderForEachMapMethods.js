//Higher Order Array Methods - forEach() & map()
let fruits = ["Apple","WaterMeleon","PineApple","Grapes"]

fruits.forEach(printFruit ) //need to give the callBack Function here & it will accept 3 parameters. calls one time each elements in the array

function printFruit(currentElement, index, totalArray){
    console.log(currentElement)
    console.log(currentElement,index,totalArray);
}
//forEach() always returns Undefined
let newArr = fruits.forEach((cElement)=>{
    return cElement
})
console.log(newArr)

console.log("-------map Methods--------")
//map()
fruits.map( function(currentElement,index,totalArray){
    console.log(currentElement,index,totalArray)
}
)
let newArr1 = fruits.map((cElement)=>{
    return cElement
})
console.log(newArr1)
//getting array of objects
let newArrobjects = fruits.map((cElement,ind)=>{
    return { id: ind+1, fruit : cElement } 
})
console.log(newArrobjects)

//Chaining Methods - calling method from another method - need to know differece betweek currying & Chaining
console.log("-------Chaining Methods--------")
let newArr2 = fruits.map( cEle => cEle.toLocaleUpperCase())
console.log(newArr2)
let newArr3 = fruits.map( cEle => cEle.toLocaleUpperCase()).sort().fill("122")
console.log(newArr3)
//this will type returns error because sicne forEach wont return any value, we can't apply methods of array like sort(), fill()
// let newArr4 = fruits.forEach( cEle => cEle.toLocaleUpperCase()).sort().fill("122")
// console.log(newArr4)
console.log("-------Applying conditions on Methods--------")
let newArr5 = fruits.map( cEle => cEle=="Apple")
console.log(newArr5)


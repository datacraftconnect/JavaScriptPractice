//reduce() - recuring multiple elements in array to a single value
let arr = [1,2,3,4,5]

//1+2+3+4+5 = 15

let totVal = 0;
for (let i=0; i< arr.length; i++){
    totVal = totVal+arr[i]
    console.log(totVal);
}
console.log(totVal);

//reduce function
console.log("------Using Reduce Function initial we are defining value of accumulator to 0-------")
let totval1 = arr.reduce((acc,cEle,index,arr)=>{return acc+cEle},0)

console.log(totval1)

let emp = [
    {eName:"karthik",salary:50000},
    {eName:"Mano",salary:100000},
    {eName:"Jakku",salary:75000},
    {eName:"Mani",salary:65000}
]
let calSalary = emp.reduce((acc,cEle)=>{return acc +cEle.salary},0)
console.log(calSalary)
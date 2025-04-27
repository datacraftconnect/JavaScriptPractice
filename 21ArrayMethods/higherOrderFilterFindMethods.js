//Higher Order Array Methods - find() & filter()
//filter() - can return multiple values
let emp = [
    {eName:"karthik",salary:50000},
    {eName:"Mano",salary:100000},
    {eName:"Jakku",salary:75000},
    {eName:"Mani",salary:65000}
]
//is called arrow function
//let filteredData = emp.filter(()=>{})
//in above syntax if we have only one parameters we don't need parantasis    
    let filteredData = emp.filter(val=> val.salary>50000)
    console.log(filteredData)
    //lets do chaining
    let filteredData1 = emp.filter(val=> val.salary>50000).fill({id:1,name:"xyz"})
    console.log(filteredData1)


//find() - will return single values

let findData = emp.find((val)=>{return val.salary>50000})
console.log(findData)
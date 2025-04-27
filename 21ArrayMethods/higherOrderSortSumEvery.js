//Higher Order Array Methods - sort()-based on normal numerical value not based on ASCII, sum() & every()
//in sort callback() is called as compareFn

let arr = [10,120,30,140,5]
//syntax for ordering in ascending
let arrAsc = arr.sort((a,b)=>{return a-b})
console.log(arrAsc)
//syntax for ordering in descending
let arrDes = arr.sort((a,b)=>{return b-a})
console.log(arrDes)

//every()-similar to logical And condition / sum() - similar to logical or condition

let val = arr.some((ele,ind,arr)=>{return ele%2==0})
console.log(val)
//need to satisfy this conditions for all elements in array
let val1 = arr.every((ele,ind,arr)=>{return ele%2==0})
console.log(val1)
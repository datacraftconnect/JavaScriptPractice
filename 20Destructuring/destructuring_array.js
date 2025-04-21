//destructuring - storing individual value in var
let arr = [20,40,80,100];

//we can achieve destructuring in single line
let [a,b,c,d] = arr;
console.log(a,b,c,d); //20 40 80 100
console.log(a,d); //20 100

//if we have more values
let arrLarge = [1,2,3,4,5,6,7,8,9,10,11,12];
let [a1,a2,a3] = arrLarge;
console.log(a1,a2,a3);//1 2 3
//let use rest operator store remaining all variables,
let [a4,a5,a6,...a7] = arrLarge
console.log(a4,a5,a6,a7);//1 2 3 [4,  5,  6,  7, 8,    9, 10, 11, 12  ]

//nestArray
let nestArray = [1,2,3,4,[10,20,30,40,[100,200,300,400]]];
let [aa,bb,cc,dd,[aa1,aa2,aa3,aa4,[...aa5]]] = nestArray
console.log(aa,bb,cc,dd,aa1,aa2,aa3,aa4,aa5); //1 2 3 4 10 20 30 40 [ 100, 200, 300, 400 ]


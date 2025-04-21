//SpreadOperator-[..] & {..} used in array & object
//Array
let hobbies = ["Cricket","Music","FootBall"];
let hobbies1 = ["BasketBall","Carrom"];

let newArr = [...hobbies, ...hobbies1];
hobbies1[0] = "Chees";
console.log(newArr,hobbies1);

let newArr2 = [...hobbies, ...hobbies1,"Kabadi"];

console.log(newArr2,hobbies1);

//why not we can assign it directly, if we update the child it will also update the parent as its referenced/ memory address remains the same 
//concetps - heap & stack memory, pass/call by value,pass/call reference
let newArr1 = hobbies;
newArr1[0] = "BasedBall"
console.log(newArr1,hobbies); //[ 'BasedBall', 'Music', 'FootBall' ] [ 'BasedBall', 'Music', 'FootBall' ]

//Object
let empObj = {
    id:12354,
    empName:"Karthik",
    role:"FullStack Developer"

};

let team2 = { ...empObj,id:1111, empSalary : 65000}; //here we can even update existing object

console.log(team2);


//Rest Parameter - used in functions ()
function restParams(arr){
    console.log(arr);

};
restParams(1,2,3,4); //output- 1

function restParams1(...arr){
    console.log(arr);

};
restParams1(1,2,3,4); //output- [ 1, 2, 3, 4 ]


function restParams2(a,b,...arr){
    console.log(a,b,arr);

};
restParams2(1,2,3,4);//output- 1 2 [ 3, 4 ]
let obj = {
    id:123,
    uName:"Karthik",
    uHobbiesArray:["Carrom","Cricket"],
    familyDetailsObj: {
        totalMembers:3,
        sibilings:["a","b"]
    },
    walkFun(){
        console.log("Im going to home");
    }
}

for(let i in obj){
    //console.log(i);
    console.log(i,obj[i]);
}

//Array
let arr = [10,100,1000];
for (let i in arr){
    console.log(arr[i]);
}
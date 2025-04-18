//Scope of Variable in Function
// var is function scope
function outerFunction(){
    if(true){
        var functionVar = "Im a Variable";
    }
    console.log( functionVar )

}
outerFunction()

//Scope of Variable in Block-{things within curly braces are Blocks}
// let & const are called as Block scope
function blockFunction(){
    if(true){
        const blkvar1 = "I am const block scope variable";
        let blkvar = "I am block Scope variable";
        console.log(blkvar1);
        // console.log(blkvar); here it will run as its with in block
    }
    //console.log(blkvar); //throws reference error as its outer
}
blockFunction()
//Global Scope of Variable  -
//its declared with var key, can be accessed in execution environment i.e. in client side its browser/ serverside it nodejs where js script runs.
var globalScopedVar = "I am accessible throught the global context"
let blockScoped = "I am let variable"
const blockScoped1 = "I am const variable"

 console.log(window.globalScopedVar); //throws error as window works on UI, so lets put in html & try to access it
 console.log(window.blockScoped); //throws error as window works on UI, so lets put in html & try to access it
 console.log(window.blockScoped1); //throws error as window works on UI, so lets put in html & try to access it
 
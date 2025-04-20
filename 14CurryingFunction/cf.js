//Currying function,  technique where a function is transformed into a sequence of functions, each taking a single argument. 

// A normal function/uncurried function that adds two numbers
function add(a, b) {
    return a + b;
  }
  
  console.log(add(2, 3)); // Output: 5
  
  // A curried version of the add function
  function curriedAdd(a) {
    return function(b) {
      return a + b;
    };
  }
  
  const addTwo = curriedAdd(3);
  console.log(addTwo(3)); // Output: 6
  
//can also do like below
console.log(curriedAdd(3)(7))

  // Or using arrow functions for a more concise syntax
  const curriedAddArrow = a => b => a + b;
  
  const addThree = curriedAddArrow(3);
  console.log(addThree(4)); // Output: 7
  
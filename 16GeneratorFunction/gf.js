//special type of function that can pause its execution and later resume from where it left off. This is achieved using the function* syntax and the yield keyword. 

// Define a generator function
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  // Create an iterator from the generator function
  const generator = simpleGenerator();
  
  console.log(generator.next().value); // Output: 1
  console.log(generator.next().value); // Output: 2
  console.log(generator.next().value); // Output: 3
  console.log(generator.next().value); // Output: undefined (no more values to yield)
  
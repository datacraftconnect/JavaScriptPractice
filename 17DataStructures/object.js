//Objects are collections of key-value pairs, where keys are strings (or symbols) and values can be any data type.

// Creating an object
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  // Accessing properties
  console.log(person.name); // Output: John
  
  // Adding properties
  person.country = 'USA';
  console.log(person); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }
  
  // Removing properties
  delete person.city;
  console.log(person); // Output: { name: 'John', age: 30, country: 'USA' }
  
  //adding properties(key value) & behavious(functions) to object
  let userProfile = {
    uName: "Karthik",
    age: 30,
    hairColor: "Black",
    eat:  function(){
        return "I am allergic to cod Fish";
    }
  }

  console.log(userProfile.hairColor, userProfile.eat());

  //defining property as string eg. vehicleType
  let vehicle = {
    "vehicleType":"4Wheeler",
    "price":20000,
    fuelType: "Petrol"
  }
  console.log(vehicle.vehicleType, vehicle.fuelType)
  console.log(vehicle["vehicleType"])
  
  //Shorthand Assigned Property
  //Dynamic Property
  let uName = "Karthik"
  let uCountry = "India"
  let dynamicProp = "employeeId" 

  let person1 = {
    uName,
    uCountry,
    [dynamicProp] : "4290"
  }

  console.log(person1);
  console.log(person1.uCountry,person1[dynamicProp]);


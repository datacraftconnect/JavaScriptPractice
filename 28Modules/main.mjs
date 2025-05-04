// import { loginData as newPerson  } from "./loginPage.mjs";
// import personObject from "./signUpPage.mjs";
import {newEmployeeId as Id, loginInfo} from './loginPage.mjs'
import signUpInfo from './signUpPage.mjs'

function application(){
   // console.log( newPerson  );
   // console.log( personObject );
   console.log( Id );
   loginInfo();
   signUpInfo(); 
}
application()
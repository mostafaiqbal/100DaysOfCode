// ES6 Challenges NEW FCC
/*
//# Use of let vs var 

let array = [];

for (let i = 0; i < 3; i++) {
    array.push(i)
}

    //console.log(array);
//console.log(i);

let printTwo;
for ( let i = 0; i < 3; i++) {
    if ( i === 2) {
        printTwo = function () {
            return i;
        }
    }    1
}
console.log(printTwo());

// #Use of const and let 

    const myPet = "dog";
        myPet = "cat";

    console.log(myPet)
  
// #Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
   return s.sort(function(a,b){
        return a - b;
    })
}
console.log(
editInPlace()
);

// #  Prevent Object Mutation

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // change code below this line
    const PI = Object.freeze(MATH_CONSTANTS);
  
    // change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  console.log(PI);


  // # Increment Function wiht Default value 

 function increment (number , value = 1) {
    return number + value;
 }

 console.log(
     increment(5)
 )
 
 let arr = [1,2,3];
 let arr2 = [...arr] ;
 arr2.push(4);

 console.log(arr);
 console.log(arr2);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  
 const [a,b, ...arr] = list ; 
 
  return arr;
}
const arr = removeFirstTwo(source);

console.log(arr); // should be [3,4,5,6,7,8,9,10]
//console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

//# Template Literals

const person = {
    name: "Zodiac Hasbro",
    age: 56
    };
// old way to access to an object 
console.log(
    "myname is " + person.name
)

// old way to access to an object 
console.log( 
    `my age is ${person.age}`
)



    var personDetails =  (name, age, color) => {
       return {
        name : name,
        age: age,
        color: color,
    } 
    }


    console.log (
        personDetails ("shipon", 35 , "brown")
    )
        */
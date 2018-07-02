// FCC ES6
/**

let printNumberTwo;

for (let i = 0; i < 3; i++) {
    if (i === 2 ) {
     printNumberTwo = function() {
        return i;
    };
 }

}

console.log(printNumberTwo());

//** Object.freez(obj)
 it is used to freez an ojbect that can never be changed. 


// Real Number
const arr = [ 4, 5.6, -9.8, 3.14, 42, 6, 8.34];

const realNumber = arr.filter(function(val) {
    return Number.isInteger(val);
})

const squire = realNumber.map(function(val) {
    return val *= val
})
//console.log(realNumber)

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];

const squaredIntegers = realNumberArray.filter((val) => Number.isInteger(val)).map((val) => val*= val);

console.log(squaredIntegers);
<<<<<<< HEAD


let myString = "Hello, World!";
let myRegex = /Hello/;
console.log(
 myRegex.test(myString)
)

 */
/*******************
 YouTube Tutorial 
 ******************* */
// let & const 
//Hoisting
// Object Literal Extension 
/**
 * let name = "max";
let age = 29

let obj  = {
    name, 
    age,
    greet() {
        console.log ("Hi my name is " + this.name + " I am " + this.age +
    " years old.")
    }
}
obj.greet();
 */



// Rest Operators 
alert("AI is coming")
=======
 
   // Rest Parameter

 function sumUp (...arg) {
     console.log(arg)
     let result = 0;
     for (let i = 0; i < arg.length; i++) {        
        result += arg[i];     
     }
     return result;
 }
console.log (sumUp(10,40,30));

// Spread Operator 

let number = [1,2,3,4,5];

console.log(number);

console.log(...number);


// Template Literals 

let name = "Gabrial";

let greet = `Hello, I am ${name}`;
console.log(greet);



// De-Structuring

let number = [1,2,3,4,5];

//let[a,b] = number;
//console.log (a, b);

//[a, b] = [b, a];
//console.log(a,b);
let [a, ...b] = number;
console.log(b);

*/

//Use class Syntax to Define a Constructor Function
/**
 * var spaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new spaceShuttle ("Jupiter");

console.log(zeus);


class spaceShuttle {
    constructor (targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const mars = new spaceShuttle ("spaceX");

console.log(mars);
*/
>>>>>>> 7d55873d21f32843479a4ed77e6ec1e415abfe12

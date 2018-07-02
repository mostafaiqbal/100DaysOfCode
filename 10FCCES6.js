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

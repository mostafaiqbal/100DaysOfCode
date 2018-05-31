// New FCC JS. 
/*
// # Basic JavaScript - Understanding Undefined Value returned from a Function
var sum = 3;
function addFive (val) {
    return sum += val;
}
console.log(
//addFive(5)
addFive (20)
);


//# Basic JavaScript - Practice comparing different values

function equalityCheck (a,b) {
    if (3 === '3') {
        return true;   
    } else {
        return false;
    }
}
console.log(
    equalityCheck()
);


//# Do While Loop 

var array = [];
var i =0;
do {
    array.push(i);
    i++
} while (i<=5);
console.log(array)

//# Use the parseInt Function 
function convertToInteger(str) {
    return parseInt(str);
}
console.log (
convertToInteger("007")
);

//# Use the parseInt Function with a Radix
function convertToInteger(string) {
    
return parseInt(string, 2);

}

console.log(
    convertToInteger(10011)
    );

    //# Use the Conditional (Ternary) Operator

    function checkEqual(a, b) {
     
        return a == b ? true : false ;
    }
    console.log (
    checkEqual(1, 2)
    );

    */

   // #Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
    return num > 0 ? "positive" : (num < 0) ? "negative" : "Zero"; 

}
console.log(
checkSign(12)
);

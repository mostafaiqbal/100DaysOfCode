/********************************************************************
 ************************* Basic Algorithm Scripting******************
 ************************************************************************/
/*
//Convert Celsius to Fahrenheit
function convertToF(celsius) {  
    let fahrenheit = celsius* 9/5 + 32;
    return fahrenheit;
  }
  console.log( convertToF(30));

  //Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
  }
  console.log(reverseString("hello"));
*/

// Factorialize a Number

function factorialize(num) {
    
    if (num === 0 || num === 1)
    return 1;

    for (let i = num - 1; i >= 1; i--) {


        num *= i;       
    }
    return num;
  }

console.log(factorialize(5));
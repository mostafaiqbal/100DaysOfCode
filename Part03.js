// Part 03 - 04/05/2018
/*
// # Reverse a String 

    function reverseString(str) {
      return str.split("").reverse().join("");
    };     
    
console.log (
    reverseString("hello")
);
*/

// #Factorialize a Number

function factorialize(num) {
   let result = 1;

   for (let i = 1; i <=num; i++) {
     result *=i;
   }
   return result;
  }
  console.log(
    factorialize(6)
  )

  
// Part 03 - 04/05/2018
/*
// # Reverse a String 

    function reverseString(str) {
      return str.split("").reverse().join("");
    };     
    
console.log (
    reverseString("hello")
);

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
  );

 //# Check for Palindromes

function palindrome(str) {
  var re =  /[\W_]/g;
  var lowerStr = str.toLowerCase().replace(re, "");
  
 var reversedStr = lowerStr.split("").reverse().join("");

  if (lowerStr == reversedStr) {
       return true;
  } else {
    return false;
  }
}
console.log(
  palindrome("_Banye")
)
 
//# FIND THE LONGEST WORD 

  function findLongestWord(str) {
    var word = str.split(" ")
    var longestWord = 0;

    for (i=0; i<word.length; i++) {

      if (word[i].length > longestWord) {
        
        longestWord = word[i].length;
      }

    }
    return longestWord; 

  }
console.log(
findLongestWord("The quick brown fox jumped over the lazy dog") );


// *******# Title Case a Sentence
function titleCase(str) {
  var array = str.toLowerCase().split(" ")  
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    
  }
  return array.join(" ");
}
console.log(
  titleCase("I'm a little tea pot")
)

//#******* Return Largest Numbers in Arrays

function largestOfFour(arr) {
    var largestNumber = [0,0,0,0];
   for(let i = 0; i < arr.length; i++) 
      for (let y = 0; y < arr[i].length; y++) {        
        if (arr[i][y] > largestNumber[i]) {
          largestNumber[i] = arr[i][y]
         }
      }
  return largestNumber;
}
console.log(
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
)
*/
//# Confirm the Ending

function confirmEnding(str, target) {
   
  var newStr = str.substr(str.length - target.length);

  if (newStr == target) {
    return true;
  } else {
    return false;
  } 
}
console.log(confirmEnding("Bangladesh" , "n"))
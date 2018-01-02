// Day 04 - 01/01/2018
//Free Code Camp Challenge: Object Oriented and Functional Programming (REVISE)
// ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****


//Chaining If Else Statements
function testSize(num) {
    if (num < 5) {
        return "Tiny"
    }  else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else if (num >= 20) {
        return "Huge"
    }
}
 console.log(

     testSize(19)
 );

//Shopping List
var myList = [];
myList = [
["chocolate", 15]
["Fish", 5]
["Meet", 3]
["Onion" , 6]
["spice", 15]
]

//Word Blank
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";

  result = "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";

  return result;
}
console.log(
wordBlanks("dog", "big", "ran", "quickly") );


// LastLetter of the Sring
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 2];
console.log(lastLetterOfLastName);


//Increment a Number with JavaScript
var myVar = 88;
myVar ++
console.log(myVar);


//factorialize
function factorialize(num) {
    if (num <= 1) {
        return 1;
    }
    for (i = num - 1 ; i >= 1; i--) {
             num *= i ;
        }
        return num ;
}

console.log (
    factorialize(0)
);

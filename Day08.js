// Day 08 - 06/01/2018
// FreeCodeCamp Challenge: sObject Oriented and Functional Programming  (REVISE)

//array.join()
var joinMe = ["Split","me","into","an","array"];
var joinedString = '';
joinedString = joinMe.join(' ');
console.log(joinedString);


//array.split()
var string = "Split me into an array";
var array = [];
array = string.split(' ')
console.log(array);

//array.concat()
var oldArray = [1,2,3];
var newArray = [];
var concatMe = [4,5,6];
newArray = oldArray.concat(concatMe)
console.log(newArray);


//ARRY.Revese ()
var array = [1,2,3,4,5,6,7];
var newArray = [];
    newArray = array.reverse()
console.log(newArray);

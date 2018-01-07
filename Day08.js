// Day 08 - 06/01/2018
// FreeCodeCamp Challenge: sObject Oriented and Functional Programming  (REVISE)



//Find the LogestWord

console.log(
    findLongestWord("May the force be with you" )
);



// palindrome
function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    var reverseString = str.split("").reverse().join("")

    if (reverseString === str) {
        return true ;
    } else {
        return false;
    }
}

console.log(
    palindrome("1 eye for of 1 eye.")
);


//factorialize
function factorialize(num) {
    if ( num <= 1) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}
console.log(
    factorialize(20)
);

//Reverse A String
function reverseString(str) {
return str.split('').reverse().join("");

}
console.log(
    reverseString("Bangladesh")
);

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

// Regex
/*
We have 24 hour customer service line. 
If you are from out side the UK please call us on 0044-208-123-6763.
If you ar from UK please call us on 0208-123-6763.
Alternatively please message us on what's app 0044.754.806.7617
*/
/*

//Regular Expressions: Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;  
let result = myRegex.test(myString);
console.log(result);

//Regular Expressions: Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result);

//Regular Expressions: Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//Regular Expressions: Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

//Regular Expressions: Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//Regular Expressions: Match Anything with Wildcard Period
let exampleSt = "let's have run with regular expression";
let unRegex = /un./;
let result = exampleSt.match(unRegex);

//Regular Expressions: Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

//Regular Expressions: Find Characters with Lazy Matching
let text = "titanic";
let myRegex = /t[a-z]?i/; // Change this line
let result = text.match(myRegex);


//Regular Expressions: Find One or More Criminals in a Hunt
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/ig; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

*/

//Regular Expressions: Match Beginning String Patterns

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
let result1 = firstRegex.test(firstString);
console.log(result1)// Returns true
let notFirst = "You can't find Ricky now.";
let result2 = firstRegex.test(notFirst);
console.log(result2)// Returns false
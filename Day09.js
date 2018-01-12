// Day 09 - 09/01/2018
// FreeCodeCamp Challenge: sObject Oriented and Functional Programming  (REVISE)

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
    var longestArray = [0,0,0,0];

    for (var i = 0; i < arr.length; i++) {

        for (var y = 0; y < arr[i].length; y++) {
            if (arr[i][y] > longestArray) {
             return    longestArray = arr[i][y];
            }
        }
    }
    return longestArray;
}
console.log(
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
);





//findLongestWord
function findLongestWord(str) {
    var longestWord = 0;
    var word = str.split(" ");

    for (var i = 0; i <word.length; i ++ ) {
        if (word[i].length > longestWord) {
            longestWord = word[i].length;
        }
    }
    return longestWord;
}
console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
);

//Title Case a Sentence
function titleCase(str) {
 var array = str.split(" ");
var newArray = array.map(function (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
})
return newArray.join(" ");
}
console.log(
    titleCase("I'm a little tea pot")
);

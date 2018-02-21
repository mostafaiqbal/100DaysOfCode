// Day 10
// FreeCodeCamp Challenge: sObject Oriented and Functional Programming  (REVISE)
//Return Largest Numbers in Arrays




/**
    function largestOfFour(arr) {
        var longestArray = [0,0,0,0];
        for (var i = 0; i < arr.length; i++) {
            for (var y = 0; y < arr[i].length; y++) {
                if (arr[i][y] > longestArray[i]) {
                 longestArray[i] = arr[i][y];
                }
            }
        }
        return longestArray;
    }

    console.log(
        largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
    );
 */

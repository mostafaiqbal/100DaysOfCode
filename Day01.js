
// Day 01 - 27/12/2017

//Free Code Camp Challenge: Chunky Monkey

function chunkArrayInGroups(arr, size) {

}
console.log(
    chunkArrayInGroups ([0, 1, 2, 3, 4, 5, 6], 3)
);




//Free Code Camp Challenge: Truncate a string
function truncateString(str, num) {
if (str.length > num) {
    if (num <=3) {
        return str.slice(0, num) + "...";
    } else {
            return str.slice(0, num - 3) + "...";
        }
    } else {
        return str;
    }
}

console.log(
    truncateString ("A-", 1)
);


//Free Code Camp Challenge: Repeat a string repeat a string
function repeatStringNumTimes(str, num) {

    if (num <= 0) {

        return "";
    } else {

        return str.repeat(num);
    }
}
console.log(
repeatStringNumTimes("abc", -2)
 );


// Free Code Camp Challenge : Confirm the Ending

    function confirmEnding(str, target) {

        var checkpoint = str.length - target.length;
    return    Boolean (str.substring(checkpoint) == target)
    }
    console.log(    confirmEnding("Bastian", "n"));


// Free Code Camp Challenge : Retrun Largest Number Array

    function largestOfFour(arr) {
        var newArray = [0,0,0,0]

for (var i = 0; i < arr.length; i++) {
  for (var y = 0; y < arr[i].length; y++ ) {

      if (arr[i][y] > newArray[i]) {

          newArray[i] = arr[i][y]
      }
  }
}
    return newArray;
}
console.log(
largestOfFour ([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
);

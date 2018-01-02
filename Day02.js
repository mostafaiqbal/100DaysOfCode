// Day 02 - 30/12/2017


// Free Code Camp Challenge: Caesars Cipher - Basic Lgorithm Script.

function rot13(str) {
    var result = [];

    for (var i = 0; i<str.length; i++ ) {
            var num = str.charCodeAt(i);

            if (num >= 65 && num <= 77) {
                num += 13;
            } else if (num >= 78 && num <= 90) {

                num -=13;
            }

            result.push(String.fromCharCode(num));
    }
    return result.join("");
}

console.log(
    rot13("SERR PBQR PNZC")
);



// Free Code Camp Challenge: Seek and Destroy
function destroyer(arr, num) {
    var arg = Array.prototype.slice.call(arguments, 1)
    var newArray= arr.filter(function(item) {
        return !arg.includes(item);

    })
    return newArray;
}
console.log(
    destroyer([1, 2, 3, 1, 2, 3], 2, 3)
);

// Free Code Camp Challenge: Where do I belong

    function getIndexToIns(arr, num) {
        arr.push(num)
        arr.sort(function(a,b){
            return a - b;
        })
        return arr.indexOf(num)
    }

console.log(
getIndexToIns([10, 20, 30, 40, 50], 30) );

// Free Code Camp Challenge: Bouncer

function bouncer(arr) {
    return arr.filter(function(itemObject){
            return itemObject;
    })
}
console.log (
bouncer([7, "ate", "", false, 9]) );

//Free Code Camp Challenge: Mutations
function mutation(arr) {
    var string1 = arr[0].toLowerCase();
    var string2 = arr[1].toLowerCase();

    for ( var i = 0; i < string2.length; i++) {
         if (string1.indexOf(string2[i]) < 0) {
             return false;
         }
    }
    return true;
}
console.log (
    mutation( ["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) );

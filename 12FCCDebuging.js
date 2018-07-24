//Debuging section 
/*
let myVar = 7;
let myArr = ["apple", "blackBerry", "samsung", "onePlus"]
console.log(
    typeof(myArr)
);

let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line
console.log(    
    typeof(seven)
);
console.log(
    typeof(three)
);

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes

    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        //let numberofColomn = m;
      // Adds the m-th row into newArray
      //console.log('n\nstarting row')
      for (let j = 1; j < n; j++) {
        //let numberofRow = n;
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      //console.log('ending row', row)
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }


    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);

  */
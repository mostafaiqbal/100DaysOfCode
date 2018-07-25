/*
let array = ['a', 'b', 'c']
  array.push("king");
  array.unshift("queen");
  // push() and unshift() Methods 
  let array = ['IV', 5, 'six']
      array.unshift('I', 2, 'Three');
      array.push('seven', 'eight', 'nine')

  //console.log(array);


    function mixedNumbers(arr) {
      arr.unshift('I', 2, 'Three');
      arr.push(7, 'VIII', 9)
      return arr;
    }  
  console.log(mixedNumbers(['IV', 5, 'six']));

// pop() and shift () Mohods of Array 
let array = ['IV', 5, 'six']
array.pop();
console.log(array);
array.shift();
console.log(array);

// splice () Method : Removing and adding at the same time. 
let arr = ['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick'];
arr.splice(arr,2, 'DarkSalmon', 'BlanchedAlmond');
console.log(arr);

// Slice() 
function forecast(arr) {
  // change code below this line
  let newArr = arr.slice(2,4);
  return newArr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


// Copy array with Spread operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr = [[...arr], ...newArr];
    // change code above this line
    num--;
  }
  return newArr;
}
// change code here to test different cases:
console.log(copyMachine([true, false, true], 4));

//***Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(
  quickCheck([3, 5, 9, 125, 45, 2], 125)
);  
// Unsolved  
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

      for (let y = 0; y < arr[i].length; y++) {

        if (arr[i][y] !== elem){
          newArr.push(arr[i]);
        }
      }
        
    }  
  
   return newArr;
  }
  
  // change code here to test different cases:
  console.log(
    filteredArray ([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)
  );

*/
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line
delete foods.apples;
delete foods.plums;
delete foods.strawberries;
// change code above this line

//console.log(foods);

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
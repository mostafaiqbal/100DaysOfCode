/*
let array = ['a', 'b', 'c']
  array.push("king");
  array.unshift("queen");
  // push() and unshift() Methods 
  let array = ['IV', 5, 'six']
      array.unshift('I', 2, 'Three');
      array.push('seven', 'eight', 'nine')

  //console.log(array);


    function mixedNumbers (arr) {
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

  
// ***check if an object is property 
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

function isEveryoneHere(obj) {
  let members = [ 'Alan', 'Jeff', 'Sarah',  'Ryan'];
  for (let i = 0; i < members.length; i++) {
   return obj.hasOwnProperty(members[i])
  }
}
console.log(isEveryoneHere(users));

*/
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// find the online users 
/**
function countOnline (obj) {
  let usersOnline = 0;
   for (let users in obj) {

    if (obj[users].online == true) {

      usersOnline++;
      
    }

 }
  return usersOnline;
}

console.log(countOnline(users));


function getArrayOfUsers(obj) {
 
return Object.keys(obj);

}

console.log(getArrayOfUsers(users));


// GreaterthanTen

function GreaterthanTen (arr) {
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  
  if (arr[i] > 10) {
    newArr.push(arr[i]);
  }
  
}
  return newArr;
}

let ar1 = [
[4,5,20],
[6,7,11],
[2,5,9]

]

let oneArr = [];

for (let i = 0; i < ar1.length; i++) {
 
  for (let y = 0; y < ar1[i].length; y++) {
   
    if(ar1[i][y] > 10) {
      oneArr.push(ar1[i]);
    }
    
  }
  
}

console.log(oneArr);



function filteredArray(arr, elem) {
  
  let newArr = [...arr];
  
  for (let i = 0; i < newArr.length; i++) { 
    
    for (let y = 0; y < newArr[i].length; y++) {
      
      if (newArr[i][y] == elem) {

        newArr.splice(i, 1);
        i--;
        break;
      }      
    }    
  }
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

*/
// Day 05 - 02/01/2018
// Free Code Camp Challenge: Object Oriented and Functional Programming (REVISE)

var count = 0;
function cc(card) {
switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
        break;
    case 7:
    case 8:
    case 9:
    count +=0;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
        break;
}
if (count > 0) {

    return count + " Bet";
} else {
    return count + " Hold";
}
}

console.log(
    cc(6)
);


function caseInSwitch(val) {
  var answer = "";
 switch (val) {
    case 1:
    case 2:
    case 3:
    answer = "Too Small";
    break;
    case 4:
    case 5:
    answer = "OK";
    break;
    case 6:
    case 7:
    answer = "Good Size";
    break;
    break;
    case 8:
    case 9:
    answer = "Good Size";
    break;
    default:
    answer = "Perfect"

 }
  return answer;
}

console.log(

    caseInSwitch(100)
);



function caseInSwitch(val) {
  var answer = "";
 switch (val) {
     case 1:
     answer = "alpha";
         break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = delta;
    break;
    default:

 }
  return answer;
}

console.log(

    caseInSwitch(1)
);


//GOLF CODE (WITH switch())
function golfScore (par, strokes) {
    var result;
    switch (true) {
        case (strokes == 1):
                result = "Hole-in-one!"
                break;
        case (strokes <= par - 2):
                result = "Eagle"
                break;
        case (strokes == par - 1):
                result = "Birdie"
                break;
        case (strokes == par):
                result = "Par"
                break;
        case (strokes == par + 1):
                result = "Bogey"
                break;
        case (strokes == par + 2):
                result = "Double Bogey"
                break;
         case (strokes >= par + 3):
                 result = "Go Home!"
                 break;
          default:
    }
    return result;
}

console.log(
    golfScore(4, 2)
);

//GOLF CODE
function golfScore(par, strokes) {
        if (strokes == 1) {
            return "Hole-in-one!"
        } else if (strokes <= par - 2) {
            return "Eagle"
        } else if (strokes == par - 1) {
            return "Birdie"
        } else if (strokes == par) {
            return "Par"
        } else if (strokes == par + 1) {
            return "Bogey"
        } else if (strokes == par + 2) {
            return "Double Bogey"
        } else if (strokes >= par + 3) {
            return "Go Home!";
        }
  }

console.log(
    golfScore(5, 5)
);

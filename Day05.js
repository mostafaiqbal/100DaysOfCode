// Day 05 - 02/01/2018
// Free Code Camp Challenge: Object Oriented and Functional Programming (REVISE)




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

// Day 06 - 04/01/2018

// FreeCodeCamp Challenge: switch Statement  (REVISE)
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

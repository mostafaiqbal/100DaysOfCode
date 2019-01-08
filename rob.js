/*
// changing innerHTML 
    document.getElementById("demo").innerHTML = "this is miqinnovation";

//Click on button to change HTML 

document.getElementById("btn").onclick = function () {
    document.getElementById("demo").innerHTML = "I have changed";
}
document.getElementById("btn").ondblclick = function() {
    document.getElementById("demo").innerHTML = " ";
}
*/

//Append text

document.getElementById("btn").onclick = function () {
    document.getElementById("demo").innerHTML = "I believe " + document.getElementById("sec").innerHTML + " awesom";
}
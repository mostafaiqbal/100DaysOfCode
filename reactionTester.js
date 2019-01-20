


let start = new Date().getTime();

function shapeAppear () {
    let top = Math.random() * 200;
    let left = Math.random() * 200;
    let width = Math.random() * 200;
    let height = Math.random() * 200;
    document.getElementById("shape").style.height = height + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";

    let start = new Date().getTime();
}
function appearTime () {
    setTimeout(shapeAppear, Math.random() * 2000)
}
appearTime();

document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    let end = new Date().getTime();
    let time = (end - start)/1000;
    document.getElementById("timeRecord").innerHTML = time + "s";
    appearTime();
   
    
}
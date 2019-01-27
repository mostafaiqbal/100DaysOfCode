
 let textDisplay = true;
 
document.getElementById("toggle").onclick = function() {

    if(textDisplay) {
        document.getElementById("sent").style.display = "none";
        textDisplay = false;

    } else {
        document.getElementById("sent").style.display = "block";
        textDisplay = true;
    }


}
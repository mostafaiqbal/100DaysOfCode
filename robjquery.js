
 let textDisplay = true;
 
$("#toggle").click(function() {


       if(textDisplay) {
        $("#sent").fadeOut(function(){
            textDisplay = false;
        });
    } else {
        $("#sent").fadeIn(function(){
            textDisplay = true;
        })
    }

})
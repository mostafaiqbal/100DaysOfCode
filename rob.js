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

//Append text
    document.getElementById("btn").onclick = function () {
    document.getElementById("demo").innerHTML = "I believe " + document.getElementById("sec").innerHTML + " awesom";
}

// manupulating style 

    document.getElementById("btn").onclick = function() {
        document.getElementById("demo").style.color = "red";
        document.getElementById("demo").style.fontSize = "35px";
        document.getElementById("btn").innerHTML = "Double Click to get normal font";
    }
    document.getElementById("btn").ondblclick = function() {
        document.getElementById("demo").style.color = "white";
        document.getElementById("demo").style.fontSize = "15px";
        document.getElementById("btn").innerHTML = "Click here for bigger font";
    }
 

    document.getElementById("red").onclick = function () {
        document.getElementById("red").style.display = "none";
    }
    document.getElementById("blue").onclick = function () {
        document.getElementById("blue").style.display = "none";
    }
    document.getElementById("yellow").onclick = function () {
        document.getElementById("yellow").style.display = "none";
    }

    document.getElementById("btn").onclick = function () {
        var a ="";
        a = document.getElementById("cool").value;
        document.getElementById("para").innerHTML = a;
     }
    
   
    let array = ["Lohagara ", " Amirabad ", " Sukchori ", " Kolauzan ", " Cuunoti " ," Sodah "];
    console.log(array);
    console.log(array.length);
    array.push(" Molliksubahan ");
    console.log(array);
    console.log(array.length);
    array.splice(2, 3);
    console.log(array);
    console.log(array.length);
    document.getElementById("demo").innerHTML = array;

    let myarray = new Array();
    myarray[0] = "joyBangla";
    myarray[1] = "JoyBongobondu";
    myarray[2] = "JoyShekHasina";
    console.log(myarray);

    let tweet = ["Good Morning", "Coffee", "Breakfast", "Getting Ready", "Head to Work"];
    console.log(tweet);
    tweet.splice(1,1, "Tea");
    console.log(tweet);

        //MAGIN WORD FINDER 
     document.getElementById("btn").onclick = function () {
      let wordEntered = document.getElementById("word").value;
      let magicWord = "abcd"
        if(wordEntered == magicWord) {
            alert("you got a match !!!")
        } else {
            alert ("Sorry try again )-:")
        }

     }
          */
/*
         document.getElementById("btn").onclick = function () {
             let rightNumber = Math.floor(Math.random() * 10) + 1;
             let numberEntered = document.getElementById("inputText").value;
            
            if (numberEntered <= 10 ) {
             
                if (numberEntered == rightNumber) {
                document.getElementById("result").innerHTML = "You got it !!!" ;
                } else {
                document.getElementById("result").innerHTML = "nope! please try again";
                }
            } else {
                document.getElementById("result").innerHTML = "SORRY ! You are out of range"
            }

        }

        */
       let tweet = ["Donuld Trum ", "Financial Time", "US-China Deal", "Brexit", "No Deal"];
        
       for (let i = 0; i < tweet.length; i++) {
           
            document.getElementById("tweetRow").innerHTML = tweet;

            
        }
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
        // Guess the Number Game
        // ************ This section need to be improved. need to add counter of the game using Loop. Betweet to add game in differnet file. ************
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
       /*
       let tweet = [" nodejs ", " vuejs ", " joomlaPhp ", " react ", " Angular "];
       
       let tweetrow = "";

       for (let i = 0; i < tweet.length; i++) {
           
        tweetrow = tweetrow + tweet[i] + "<br/>";
           
       }

       document.getElementById("tweetRow").innerHTML = tweetrow;

   

   let tweet = [" nodejs ", " vuejs ", " joomlaPhp ", " react ", " Angular "];
   let i = 0; 
   let tweetrow = " ";
   while (i < tweet.length) {
    tweetrow = tweetrow + tweet[i] + "<br/>";
    i++
   }
    document.getElementById("tweetRow").innerHTML = tweetrow;

     */
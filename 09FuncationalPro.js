// FCC Funcational Programming

let greenTea = "greenTea";
let blackTea = "blackTea";

const getTea = (typeOfTea, numberOfTeas) => {  
    const teaCups = []; 
    for (let blackTeaCup = 1; blackTeaCup <= numberOfTeas; blackTeaCup++) {
        
        teaCups.push(blackTea);
    }

    for (let greenTeaCup = 1; greenTeaCup <= numberOfTeas; greenTeaCup++) {
        
        teaCups.push(greenTea);
    }



    return teaCups;
}

const tea4GreenTeamFCC = getTea(greenTea, 40);

console.log(tea4GreenTeamFCC); 


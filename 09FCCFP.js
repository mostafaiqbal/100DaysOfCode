// FCC Funcational Programming
/** 
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

*/

/**
 * YOUTUBE TUTORIAL ON FUNCTIONAL PROGRAMMING
 * 
 */


let animals = [
    { name: "jack",     species: "rabit"},
    { name: "russel",   species: "dog"},
    { name: "josef",    species: "fish"},
    { name: "falcon",    species: "dog"},
    { name: "saba",    species: "cat"},
    { name: "basi",    species: "fish"}
]

var names = animals.map(function(animals){
    return animals.name + " is a " + animals.species;
})
   console.log(names);
/*
 let name = [];
for (let i = 0; i < animals.length; i++) {
        name.push(animals[i].name);
       
   }
   console.log(name);

let isDog = function(animals){
    return animals.species === "dog";
}
let dog = animals.filter(isDog);
console.log(dog);

let dog = [];
let rest = [];
for (let i = 0; i < animals.length; i++) {
    if (animals[i].species === "dog") {
        dog.push(animals[i]);
    } else {
        rest.push(animals[i])
    }
}

console.log(dog);
console.log(rest);

*/


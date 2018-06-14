// FCC Funcational Programming

let prepareGreenTea = () => "GreenTea";
let prepareBlackTea = () => "BlackTea";

let getTea = function (prepareTea, numberOfCups) {
    let cups = [];
    for (let i = 1; i <=numberOfCups; i++) {
        cups.push(prepareTea);
        
    }
    return cups;
}
        const tea4GreenTeamFCC = getTea(prepareGreenTea(), 27)
        const teaBlackTeamFCC = getTea(prepareBlackTea(), 13)
//console.log(teaBlackTeamFCC)













/*******************************************
 * YOUTUBE TUTORIAL ON FUNCTIONAL PROGRAMMING 
 */

/*
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



// Reduce

let order = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325},
]
 
let totoalAmount = order.reduce((sum, order) => sum + order.amount,0)

console.log (totoalAmount);

 let totoalAmount = 0;

for (let i = 0; i < order.length; i++) {
    totoalAmount += order[i].amount;
    
}

 */

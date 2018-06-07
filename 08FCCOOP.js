// Object Oriented Programming - Create a Basic JavaScript Object

/*
// Use Dot Notation to Access the Properties of an Object
//  Create a Method on an Object
//Make Code More Reusable with the this Keyword

let dog = {
  name : "Floyed",
  numLegs : 4,
  sayLegs : function() {
           return "This dog has " + this.numLegs + " legs.";
         },
};
console.log("the object is" + dog);
console.log("Name of the dog : " + dog.name);
console.log("Number of legs" + dog.name + "have : " + dog.numLegs);
console.log(dog.sayLegs());

// Define a Constructor Function

function Dog() {
    this.name = "Floyd";
    this.color = "Brown";
    this.numLegs = 4;
}
console.log(Dog);

let myDog = new Dog();
console.log(myDog);
console.log(myDog.color);

myDog.color = "Black";
console.log(myDog.color);

//Extend Constructors to Receive Arguments ***instanceof***

let BIGDOG = function (name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4
}
let terrier = new BIGDOG ("Kala", "Black");
console.log(terrier);
console.log ( "Terrier has " + terrier.numLegs + " legs.");
console.log (terrier instanceof BIGDOG);

//Understand Own Properties

function Bird (name, color) {
    this.name = name;
    this.color = color; 
    this.numLegs = 2;
}
let canary = new Bird ("Tweety");
console.log(canary);

let ownProperty = [];

for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProperty.push(property);
    }
}

console.log("count of ownProprtry " + ownProperty);

let BDDOG = function (name, color) {
    this.name = name;
    this.color = color;
}
BDDOG.prototype.numLegs = 4;

let lalkutta = new BDDOG ("LALA", "Red");
console.log(lalkutta);
console.log ( "lalKutta has " + lalkutta.numLegs + " legs.");
console.log (lalkutta instanceof BIGDOG);

let lalKuttaPropertyArray = [];

for (let property in lalkutta) {
    if (lalkutta.hasOwnProperty(property)) {
        lalKuttaPropertyArray.push(property);
    }
}
console.log(lalKuttaPropertyArray);

//#Iterate Over All Properties

let ownProps = [];
let prototypeProps = [];

for (let property in lalkutta) {
    if (lalkutta.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}
console.log("Own Proporties of Lalkutta " + ownProps);
console.log("Prototyoe Proporties of Lalkutta " + prototypeProps);

//Understand the Constructor Property
    console.log (lalkutta.constructor === BDDOG)

    function joinBDDOGgroup(candidate) {
        if (candidate.constructor === BDDOG) {
            return true;
        } else {
            return false
        }
    }
console.log(joinBDDOGgroup(lalkutta));


//# Change the Prototype to a New Object

function Dog (name) {
    this.name = name;
}

Dog.prototype =  {
    numLegs : 2,
    eat     : function () {
        console.log("when eat I do not make noice");
    },
    describe: function() {
        console.log("my name is "+ this.name);
    },
}

let tiss = new Dog ("Tiss");
console.log(tiss);
console.log(
    tiss.hasOwnProperty ("name")
);

let ownProp = [];
let protoProp = [];

for (let property in tiss) {
    if (tiss.hasOwnProperty(property)) {
        ownProp.push(property);
    } else {
        protoProp.push(property);
    }
}

console.log(ownProp);
console.log(protoProp);

// DO NOT REPEAT CODE (USING SUPER TYPE)

//*** Super prototype 
function Animal() {
    
}

Animal.prototype = {
    constructor: Animal,
      eat: function() {
      console.log("nom nom nom");
    }
  };

function Cat(name) {
    this.name = name; 
  }

  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  Cat.prototype.call = function (){
      console.log("I call mew mew")
  }


let cat = new Cat ("MIMI");

console.log(cat.eat());
console.log(cat.call());



function Animal() { };

Animal.prototype = {
    eat: function() {
    console.log("I eat chup choup")
    },
}

function Bird (name) {
    this.name = name;
 };
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Bird.prototype.eat = function () { 
    console.log("I eat Tup Tup")
}

let duck = new Bird("PIPI");


console.log(duck);
console.log(duck.eat());


// #Use a Mixin to Add Common Behavior Between Unrelated Objects

function flyMixin (obj) {
    obj.fly = function() {
        console.log("Yes ! I can fly")
    }
};

let bird = {
    name: "PiPi",   
    numLegs: 2,

}

let plane = {
    name: "BA",
    numWings : 2,

}

flyMixin(bird);
console.log(bird.fly());

flyMixin(plane);
console.log(plane.fly());

// Protect Properties Within an Object from Being Modified Externally

function Bird() {
    let hatchEgg = 10;
    this.eggCount = () => {
        return hatchEgg;
    }
}

let cukk = new Bird ();

console.log(cukk.eggCount());

// ## Immediately Invoked Function Expression (IIFE)
(function (){
    console.log("My name is IQBAL")
})();
*/  





// STEP 1

// Named class declaration
class Cat {
    constructor(name) {
        this.name = name;
    }
}

// Anonymous class declaration
const Dog = class {
    constructor(name) {
        this.name = name;
    }
};


// STEP 2

// let cat1 = new Cat("Whiskers");
// let dog1 = new Dog("Buddy");

// console.log(cat1);
// console.log(dog1);

// Define Cat class first
class Cat {
    constructor(name) {
        this.name = name;
    }
}

// Define Dog class first
const Dog = class {
    constructor(name) {
        this.name = name;
    }
};

// Create instances
let cat1 = new Cat("Whiskers");
let dog1 = new Dog("Buddy");

console.log(cat1);
console.log(dog1);



// STEP 3

class Animal {
    constructor() {
    }

    createAnimal() {
        console.log("The Animal has been created");
    }
}

let animal1 = new Animal();

    animal1.createAnimal();


// STEP 4

class AnimalMessage {
    constructor(message) {
        this.message = message;
    }

    displayMessage() {
        console.log(this.message);
    }
}

let animal2 = new AnimalMessage("The Animal has been created");

// animal2.displayMessage();


// STEP 5

class AnimalProperties {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
}

let animal3 = new AnimalProperties(
    "dog",
    "Golden Retriever",
    "gold",
    "24 inches",
    "36 inches"
);


// STEP 6

// for (let property in animal3) {
//     console.log(`${property}: ${animal3[property]}`);
// }


// STEP 7

class AnimalSpeak {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }

    speak() {
        if (this.type.toLowerCase() === "dog") {
            return `The ${this.color} dog is barking!`;
        } else if (this.type.toLowerCase() === "cat") {
            return `The ${this.color} cat is meowing!`;
        }
    }
}

let dogAnimal = new AnimalSpeak(
    "dog",
    "Labrador",
    "black",
    "25 inches",
    "40 inches"
);

// console.log(dogAnimal.speak());


// STEP 8

class AnimalPrivate {

    #type;
    #breed;
    #color;
    #height;
    #length;

    constructor(type, breed, color, height, length) {
        this.#type = type;
        this.#breed = breed;
        this.#color = color;
        this.#height = height;
        this.#length = length;
    }

    #checkType() {
        if (this.#type.toLowerCase() === "dog") {
            return "dog";
        } else {
            return "cat";
        }
    }

    speak() {
        return `The ${this.#checkType()} has made a noise!`;
    }
}

let privateAnimal = new AnimalPrivate(
    "dog",
    "German Shepherd",
    "brown",
    "26 inches",
    "42 inches"
);

// console.log(privateAnimal.speak());


// STEP 9

String.prototype.findWords = function(word) {

    let pattern = new RegExp("\\b" + word + "\\b", "gi");

    let matches = this.match(pattern);

    let count = matches ? matches.length : 0;

    alert(`The word "${word}" was found ${count} time(s).`);
};

let paragraph =
    "JavaScript is a programming language. JavaScript is used " +
    "for web development. Learning JavaScript is fun.";

// paragraph.findWords("JavaScript");
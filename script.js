//complete this code
class Animal {
	constructor(species){
		this._species = species;	
}
	get species(){
		return this._species;
	}

	makeSound(){
		console.log(`The ${this._species} make a sound`);
	}
}

class Cat extends Animal {
    constructor (species) {
        super(species);
    }
    makeSound(){
        console.log("purr");
    }
}

class Dog extends Animal {
    constructor(species){
        super(species);
    }
    makeSound() {
        console.log("woof");
    }
}

const animal = new Animal("Unknown");
console.log(animal.species); 
animal.makeSound(); 

const cat = new Cat("Cat");
console.log(cat.species); 
cat.makeSound(); 
cat.purr();

const dog = new Dog("Dog");
console.log(dog.species); 
dog.makeSound(); 
dog.bark(); 

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

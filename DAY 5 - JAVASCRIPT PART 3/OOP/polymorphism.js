class Animal {
    makeSound() {
        return "The anime makes a noise.";
    }
}

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + " I heard a dog bark.";
    }
}

class Cat extends Animal {
    makeSound() {
        return super.makeSound() + " I heard a cat meow.";
    }
}

const myDog = new Dog();
console.log(myDog.makeSound());

const myCat = new Cat();
console.log(myCat.makeSound());
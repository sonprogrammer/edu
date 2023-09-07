class Animal {
    name: string;

    constructor (name: string) {
        this.name = name;
    }

    eat(): void {
        console.log(`${this.name}이 밥을 먹는다`)
    }
}

// Dog

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    bark(): void {
        console.log(`${this.name}: 멍멍`)
    }

    eat(): void {
        super.eat();
        console.log(`${this.name}: 와구와구`)
    }
}

const daisy: Dog = new Dog("Daisy", "치와와")
daisy.bark() // Daisy: 멍멍, 
daisy.eat()  // Daisy: 와구와구, 만약에 animal을 받으면  Daisy이 밥을 먹는다가 출력된다

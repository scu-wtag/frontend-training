const person1 = {
    firstName: "Felix",
    lastName: "Trunz",
    age: 19,
    greet: function(){console.log(`Hello ${this.firstName}, how are you doing today?`)}
}

const person2 = {
    firstName: "Celina",
    lastName: "Wasser",
    age: 19,
    sayHello: () => console.log(`Hello! ${this.firstName}, whats up!`)
}

person1.greet()
person2.sayHello()
console.log("JS Classes are just syntantic sugar, it's just prototypal inheritance:")

class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayHello() {
		return "Hello, " + this.firstName + " " + this.lastName;
	}
}

var jane = new Person("Jane", "Doe");
console.log(jane.sayHello());

class InformalPerson extends Person {
	constructor(firstName, lastName) {
		super(firstName, lastName);
	}

	sayHello() {
		return "Yo, " + this.firstName;
	}
}

var john = new InformalPerson("John", "Doe");
console.log(john.sayHello());
console.log(john);
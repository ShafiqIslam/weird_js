var person = {
	firstName: "Default",
	lastName: "Default",
	getName: function () {
		return this.firstName + " " + this.lastName;
	}
};

var johnDoe = {
	firstName: "John",
	lastName: "Doe"
};
johnDoe.__proto__ = person; // don't try this at home.

var janeDoe = {
	firstName: "Jane"
};
janeDoe.__proto__ = johnDoe;

console.log(johnDoe.getName());
console.log(janeDoe.getName());
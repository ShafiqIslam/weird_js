var person = {
	name: "John Doe",
	getName: function () {
		return this.name;
	}
}

var person2 = {
	name: "Jane Doe",
	getName: function () {
		return this.name;
	}
}

console.log("bind(just creates a copy with binded object): ");
var logger = function() {
	console.log("Logged: " + this.getName());
}

var logger2 = function() {
	console.log("Logged: " + this.getName());
}.bind(person2);

//logger(); this will give error, cz there is no getName method in global object.
var personLogger = logger.bind(person);
personLogger();
logger2();



console.log("\ncall(invoke the function with the given object and params): ");
var logger3 = function(etc) {
	console.log("Logged: " + this.getName() + "\tParams: " + etc);
}
logger3.call(person, "Blah!");
logger3.call(person2, "Meh!");



console.log("\napply(same as call, but expects the params as array): ");
logger3.apply(person2, ["Meh!"]);
(function(etc) {
	console.log("Logged: " + this.getName() + "\tParams: " + etc);
}).apply(person, ["Blah!"]);



console.log("\nfunction borrowing: ");
var person3 = {
	name: "Johnny Doe",
}
console.log(person.getName.apply(person3));

console.log("\nfunction currying: ");
function multiply(a, b) {
	return a * b;
}
var multiplyByTwo = multiply.bind(this, 2); // 'this' is doing nothing here. a was set to 2 by bind.
var multiplyByThree = multiply.bind(this, 3, 3); // both a and b is set to 3. so result = 9 always.
console.log(multiplyByTwo(5));
console.log(multiplyByThree(5));
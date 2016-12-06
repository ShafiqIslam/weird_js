function Person(first_name, last_name = "Doe") {
	this.first_name = first_name;
	this.last_name = last_name;
	console.log("Function constructor was invoked!");
	// return {};
}

Person.prototype.getFullName = function() {
	return this.first_name + " " + this.last_name;
};

var john = new Person("John");
var jane = new Person("Jane");

console.log("\nUsing function constructors:");
console.log(john);
console.log(jane);

console.log("\nThe prototype function is living on its __proto__ object:");
console.log(john.__proto__);


console.log("\nEvery object has access to the prototype function by prototype chaining:");
console.log(john.getFullName());
console.log(jane.getFullName());


console.log("\nBuilt in function constructors can also have prototype function:");
var s = new String("John");
String.prototype.isLengthGreaterThan = function(limit) {
	return this.length > limit;
}
console.log(s.isLengthGreaterThan(3));
console.log("shafiq".isLengthGreaterThan(10));
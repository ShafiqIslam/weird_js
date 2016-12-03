function hello() {
	console.log("Hello World!");
}

hello.context = "World";

console.log(hello);
console.log(hello.name);
console.log(hello.context);

// Expression: is a unit of a code that results in a value.
// Statement: is a unit of a code that just do something.


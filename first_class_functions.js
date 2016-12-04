/*
 * first class function
 */
function hello() {
	console.log("Hello World!");
}
hello.context = "World";
console.log(hello);
console.log(hello.name);
console.log(hello.context);

function callback(a) {
	a();
}
callback(function() {
	console.log("Call this function back.");
});


/*
 * Expression: is a unit of a code that results in a value.
 * Statement: is a unit of a code that just do something.
 */
console.log("\n");
statement();
function statement() {
	console.log('This function is just a statement.');
}

// expression(); wont't work.
var expression = function() {
	console.log('This function is an expression.');
}
expression();


/*
 * by value (primitives) and by reference (objects)
 */
console.log("\nBy Value (primitives)");
var a = 5;
byValue(a);
function byValue(a) {
	a = a*2;
	console.log("Inside function: " + a);
}
console.log("After function: " + a);

console.log("\nBy Reference (objects)");
var a = { value: 5 };
byReference(a);
function byReference(a) {
	a.value = a.value*2; // mutation
	console.log("Inside function: " + a.value);
}
console.log("After function: " + a.value);




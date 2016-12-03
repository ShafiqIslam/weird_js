function b() {
	var myVar;
	console.log("Inside b's execution context: myVar = " + myVar);
	console.log("Inside b's execution context: myVar2 = " + myVar2);

	(function b2() {
		console.log("Inside b2's execution context: myVar2 = " + myVar2);
	})();

	console.log("\n");
}

function a() {
	var myVar = 2;
	var myVar2 = 22;
	console.log("Inside a's execution context: myVar = " + myVar);
	
	console.log("\nSynchronus call:");
	b();

	(function a2() {
		console.log("Inside a2's execution context: myVar2 = " + myVar2);
	})();
}

var myVar = 1;
var myVar2 = 11;
a();

console.log("\nInside global execution context: myVar = " + myVar);
console.log("Inside global execution context: myVar2 = " + myVar2);

/*
	myVar is following general procedures just like other languages. But myVar2 is bit troublesome. 

	Scope Chaining
	--------------
	It checks where the execution context or variable environment is lexically sitting.
	It goes over its outer reference(which is its lexical context) to find the value.
	Function b is lexically on global context so outer reference is the global object.
	Function a2 is lexically on function a's context so outer reference is the object a as b2.
	So, when myVar2 is referenced in b, it goes to its outer reference(global) and get the value 11.
	So, when myVar2 is referenced in a2, it goes to its outer reference(a) and get the value 22.
	So, when myVar2 is referenced in b2, it goes to its outer reference(b), didn't find it, so
	chained back to b's outer reference(global) and get the value 11.
*/

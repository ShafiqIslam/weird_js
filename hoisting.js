console.log(myVar);
console.log(aFunction);
aFunction();

function aFunction() {
	console.log('aFunction is called');
}

if(myVar === undefined) {
	console.log("myVar is undefined");
} else {
	console.log("myVar is defined");
}

var myVar = "Hello";
console.log(myVar);

console.log("\nReferring global object and this:");
console.log(window.aFunction());
console.log(this.myVar);
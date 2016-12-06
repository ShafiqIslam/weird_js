function age(birthday) {

	var dob  = new Date(birthday);
	var today= new Date();

	return function() {
		console.log("Days lived: " + Math.floor( (today - dob)/(24*3600*1000) ) );
	}
}

var a = age("October 13, 2014 00:00:00");
console.log(a);
a();

/*
 * When age has returned a function, age function's execution context is popped up.
 * So, the variables dob, and today should be eliminated by garbage collection.
 * But, it's not. When the returned function is invoked it somehow has the 
 * variables. That's closure. 
 *
 * Any function inside a function will still have a reference to it's outer reference 
 * in scope chain even after the outer function is popped from execution stack. So,
 * when the insider function's execution context is created, it has the reference
 * to its lexical scope variables and functions. It looks like the insider 
 * function's executing context is wrapped with or closed with all the 
 * variables of the scope chain and JS engine makes sure that every 
 * functionw will always have access to the variables that it's 
 * suppossed to have by its scope chain/lexical environment.
 *
 * This phenomena of closing in the variables is called 'Closure'.
 * JS engine makes that for us, so we don't create a closure,
 * the engine does. We just take advantage of it.
 */


console.log("\nDigging dip on closure:");
function bulidFunctions(n) {
	var arr = [];
	var arr2 = [];

	for(var i=0; i<n; i++) {
		let j = i; // creates a whole new memory space every iteration
		arr.push(function () {
			console.log("i = " + i + " ---- j = " + j);
	
			/*
			 * This function has its outer reference to i, but when it is invoked, that variable 
			 * i is holding the final value. and j is created in every iteration for the 'for 
			 * loop's context; so its reference to j will be a new on each invocation.
			 */
		});

		// same functionality without let
		arr2.push(
			(function(j) {
				return function() {
					console.log("i = " + i + " ---- j = " + j);
				}
			}(i))
		);
	}

	return arr2;
}

var functions = bulidFunctions(3);
for(var i=0; i<3; i++) {
	functions[i]();
}


console.log("\nFunction factory:");
function makeGreeting(language = "en") {
	//language = language || "en"; // default value not supported in all browser
	return function(name) {
		var greet = "";
		if(language == "en") {
			greet = "Hello";
		} else if(language = "es") {
			greet = "Hola";
		}
		console.log(greet + " " + name + "!");
	}
}
var greetEng = makeGreeting();
var greetEsp = makeGreeting('es');
greetEng("World");
greetEsp("Mundo");



console.log("\nFirst class function, closure and callbacks in usual js:");
function logSomethingLater(somthing) {
	setTimeout(function() {
		console.log(somthing);
	}, 5000);
	
	/*
	 * This function finishes and push the setTimeout event into event queue.
	 * The function inside setTimeout is a function expression, which is
	 * set as callback function to call after the time is out in the 
	 * event queue. This function is also a closure because when
	 * the callback is invoked, there is no something in its
	 * scope. But, it has the reference by scope chain. 
	 */
}
logSomethingLater("Here it goes");
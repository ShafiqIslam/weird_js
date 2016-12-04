console.log("In global execution context");
console.log(this);

console.log("\n");
function a() {
	console.log("In a's execution context");
	console.log(this);
}
a();

console.log("\n");
function b() {
	this.newVariable = 10;

	(function b2() {
		console.log("In b2's execution context");
		console.log(this);
	})();
}
b();
console.log("New variable attached in this object on b's context: " + newVariable);

console.log("\n");
console.log("In myObject");
var myObject = {
	name: "Test object",
	log: function() {
		console.log(this); // this === myObject 
		this.name = "Test object name updated!";
		(function changeName(newName) {
			this.name = newName; // this === global object 
		})("Once more! Once more!!");
		console.log(this);
	}
};
myObject.log();
// WTF
console.log(name);
delete this.name;

console.log("\n");
console.log("In myObject2");
var myObject2 = {
	name: "Test object 2",
	log: function() {
		var self = this; // by reference
		console.log(self); // self === myObject2 
		(function changeName(newName) {
			self.name = newName; // self === myObject2 
		})("Test object 2 name updated!");
		console.log(self);
	}
};
myObject2.log();
console.log(this.hasOwnProperty("name"));
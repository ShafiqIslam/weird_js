function waitSeconds(s) {
	console.log("Wait function called");
	let waitUntil = new Date().getTime() + 1000 * s;
	while(new Date() < waitUntil) {}
	console.log("Wait function finished");
}

setTimeout(function() {
	console.log("I am a timeout event and enqueued to event queue. JS move on with the codes below. When all the codes will finished executing, I will be dequeued.");
}, 5000);

document.addEventListener('click', function () {
	console.log("Yep, I got that click. Now, I will dequeue the handler from event queue.");
});

setTimeout(function() {
	console.log("I am another timeout");
}, 2000);

waitSeconds(10);
console.log("Program finished. Now event queue will be dequeued and that's how I act asynchronusly. I deceived!");
// Setting timeout

setTimeout(function() {
	console.log("runs after 3s");
}, 3000);


// Cancelling timeout

var  timerId = setTimeout(function() {
	console.log("Function runs in 30s");
}, 30000);

setTimeout(function () {
	console.log("Cancelling the timeout;")
	clearTimeout(timerId);
}, 3000);


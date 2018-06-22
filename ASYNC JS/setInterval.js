//setInterval usage

function callback() {
	console.log("callback is called continuously");
}

var repeat = setInterval(callback, 1000);

// cancelling setInterval


function countdown (seconds){
	var intervalId = setInterval(function() {
		console.log("Timer: " + seconds);
		seconds--;
		if(seconds === 0){
			clearInterval(intervalId);
			console.log("Ding ding ding!");
		}
	}, 1000);
}


countdown(10);


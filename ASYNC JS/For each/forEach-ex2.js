 var arr = [1,2,3,4,5,6];
 forEach(arr, function(number) {
 	console.log(number * 2);
 });

// For each is a function that take an array as 
// a parameter and feed it into the callback function

// forEach example with All callback parameters

var strings = ["my", "forEach", "ecample"];

var result = "";

forEach(strings, function(str, index, array) {
	if(array.length - 1 !== index){
		result += str + " ";
	} else {
		result += str + "!!!";
	}
});


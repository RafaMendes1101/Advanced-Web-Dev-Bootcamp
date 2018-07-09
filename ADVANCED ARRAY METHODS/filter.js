// Creates an array
// Iterates through an array
// Runs a callback function on each value in the array
// If the cb function returns treu, that value will be added to the new array, if false it won't be added/


var arr = [1,2,3];

arr.filter(function(value, index, array){
	//no need for an if statement
	//just return an expression
	//taht evaluates to true or false!
	return value > 2;
});

var intructors = [
{name: "Elie"},
{name: "Tim"},
{name: "Matt"},
{name: "Colt"}
];

instructors.filter(function(v, i ,a){
	return value.name.length > 3;
});



function filter(array, cb){ //accepts an array and a function to be executed for each array element
	var newArr = []; // creates new array
	for(var i = 0; i < array.length; i++){ //loop through the array
		if(cb(array[i], i, array)){ // checks if the cb returns true or false for each element of the array
			newArr.push(array[i]); //if it returned true it's pushed into the new array
		}
	}
	return newArr; 
}


// Using Filter in a function

function onlyFourLetterNames(arr){
	return arr.filter(function(value){
		return value.length === 4;
	});
}

onlyFourLetterNames(['Rusty','Matt','Moxie','Colt']);
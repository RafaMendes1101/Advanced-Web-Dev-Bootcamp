var arr = [1,2,3];

arr.some(function(value, index, array){
	return value < 2;
});

var arr = [1,2,3]

arr.some(function(value, index, array){
	return value > 4;
});

function some(arr, callback){
	for(var i = 0 ; arr.length; i++){
		if (callback(arr[i], i , arr)){
			return true;
		}
	}
	return false;
}

var arr = [-1,-2,-3];

arr.every(function(value, index, array){
	return value < 0;
}); // true

var arr = [1,2,3];

arr.every(function(value, index, array){
	return value > 2;
}); // false

function every(arr, callback){
	for(var i=0; arr.length; i++){
		if(callback(arr[i], i, arr) === false){
			return false;
		}
	}
	return true;
}

function allLowerCase(str){
	return str.split('').every(function(value){
		return value === value.toLowerCase();
	});
}

allLowerCase("this is really nice"); //true
allLowerCase("this is Really nice"); //false

function allArrays(arr){
	return arr.every(Array.isArray); // built in method that checks if each value is an array
}

allArrays([[1],[2],[3,4]]); //true
allArrays([[1],[2],{}]); // false
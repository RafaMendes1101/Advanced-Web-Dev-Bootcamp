var arr = [1,2,3];

arr.map(function(value, index, array){
	return value *2;
});


function map(arr, callback){
	var newArr = [];
	for(var i=0; a<arr.length; i++){
		newArr.push(callback(arr[i], i, arr));
	}
	return newArr;
}

function test(arr){
	return arr.map(function(val, indx){
		return val + indx;
	});
}

test([1,2,3])

// takes an array "arr" then map the array returning the values multiplied by 3
function tripleValues(arr){
	return arr.map(function(value){
		return value *3;
	});
}

tripleValues([1,2,3]); // [3,6,9]


function onlyFirstName(arr){
	return arr.map(function(val)){
		return val.first;
	}	
}


onlyFIrstName([{first: "Rafael", last: "Mendes"}, {first: "Bianca", last:"Guelere"}]); //['Rafael','Bianca'];
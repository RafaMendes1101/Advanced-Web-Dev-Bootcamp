var arr = [5,4,1,4,5];
arr.reduce(function(accumulator, nextValue){
	if(nextValue in accumulator){
		accumulator[nextValue]++;
	} else {
		accumulator[nextValue] = 1;
	}
	return accumulator;
},{});

function sumOddNumbers(arr){
	return arr.reduce(function(accumulator,nextValue){
		if(nextValue % 2 !== 0){
			accumulator += nextValue;
		}
		return accumulator;
	},0);
}

sumOddNumbers([1,2,3,4,5]); // 9

function createFullName(arr){
	return arr.reduce(function(accumulator, nextValue){
		accumulator.push(nextValue.first + " " + nextValue.last);
		return accumulator;
	},[]);
}

createFullName([{first: "Rafael", last: "Mendes"}, {first: "Bianca", last:"Guelere"}]);
// ["Rafael Mendes", "Bianca Guelere"];
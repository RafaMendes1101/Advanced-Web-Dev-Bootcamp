var array = [1,2,3,4,5,6,7,8,9,10]

var find = findIndex(array, function(arr, index, array){
return arr === index;
});

console.log(find);
// Functions are first-class data types
// function are objects
function multiply (x, y){
	return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);

// function factory
function makeMultiplier(multiplier){
	var myFunc = function(x){
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// passing fuctions as arguments
function doOperationOn(x, operation){
	return operation(x);
}
 var result = doOperationOn(5, multiplyBy3);
 console.log(result);
 result = doOperationOn(100, doubleAll);
 console.log(result);
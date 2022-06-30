// // Functions are first-class data types
// // function are objects
// function multiply (x, y){
// 	return x * y;
// }
// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// // function factory
// function makeMultiplier(multiplier){
// 	var myFunc = function(x){
// 		return multiplier * x;
// 	};
// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// // passing fuctions as arguments
// function doOperationOn(x, operation){
// 	return operation(x);
// }
//  var result = doOperationOn(5, multiplyBy3);
//  console.log(result);
//  result = doOperationOn(100, doubleAll);
//  console.log(result);

// passing variables by value vs by reference
// var a = 7;
// var b = a;
// console.log("a:" +a);
// console.log("b:" +b);

// b=5
// console.log("after b update:");
// console.log("a: " +a);
// console.log("b:" +b); 

// // passing by reference
// var a = {x: 7};
// var b = a;
// console.log(a);
// console.log(b);

// pass by reference vs by value
// function changePrimitive(primValue){
// 	console.log("in changePrimitive...");
// 	console.log("before");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after:");
// 	console.log(primValue);
// }

// var value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive, orig value:")
// console.log(value);

// function changeObject(ObjValue){
// 	console.log("in changeObject...");
// 	console.log("before:");
// 	console.log(ObjValue);

// 	ObjValue.x = 5;
// 	console.log("after:");
// 	console.log(ObjValue);
// }
// value = {x: 7};
// changeObject(value);
// console.log("after changeObject, orig value:");
// console.log(value);

// new new new 
// function test(){
// 	console.log("hello coursera!");
// }
// test();

// function constructors
// function Circle (radius){
// 	this.radius = radius;

// 	this.getArea =
// 	function (){
// 		return Math.PI * Math.pow(this.radius, 2);
// 	};
// }

// var myCircle = new Circle(10);
// console.log(myCircle);

// function Circle (radius){
// 	this.radius = radius;
// }
// Circle.prototype.getArea =
// function (){
// return Math.PI * Mth.pow(this.radius, 2);
// };

// var myCircle = new Circle(10);
// console.log(myCircle); 

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

// Object Literals and "this"
var literalCircle = { //new object()
	radius: 10,

	getArea: function () {
		var self = this;
		console.log(this);

		var increaseRadius = function (){
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
	}
};
 
 console.log(literalCircle.getArea());
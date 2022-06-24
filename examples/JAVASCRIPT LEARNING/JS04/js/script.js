// string conocations
// var string = "hello";
// string += " world";
// console.log(string + "!");

// console.log((5+4)/3);
// console.log(undefined / 5);
// function test1(a) {
// 	console.log(a / 5);
// }
// test1();

// //  Equality
//  var x = 4, y = 4;
// // if (x == y) {
// 	console.log("x='4' is equal to y='4'")
// }
// x = "4";
// if (x == y){
// 	console.log("x='4' is equal to y='4'");
// }

//strict equality

// if (x === y) {
// 	console.log("Strict: x='4' is equal to y='4'");
// }
// else{
// 	console.log("Strict: x='4' is not equal to y=4");

// }

// // if statement(all false)
// if( false || null ||
// undefined || "" || 0 || NaN){
// 	console.log("this like wont ever execute");

// }
// else{
// 	console.log("all false");
// }

// // if statement(all true)
// if (true && "hello" && 1 && -1 && "false"){
// 	console.log("all true");
// }

// best practive for {} style
// curly brace on the same or next line
// is it just a style?
function a() 
{
	return
	{
		name: "maero"
	};
}

function b() {
	return{
		name: "maero"
	};
}

console.log(a());
console.log(b());

// for loop
var sum = 0;
for (var i = 0; i < 10; i++) {
	sum = sum + 1;
}
console.log("sum of 0 throught 9 is:" + sum);
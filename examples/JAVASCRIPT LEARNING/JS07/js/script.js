// Arrays
// var array = new Array ();
// array[0] = " kenway";
// array[1] = "2";
// array[2] = function (name){
// 	console.log("hello" + name);
// };
// array[3] = {course: "html, css & js"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

// short hand array creation
// var names = [" kenway", " haythem", " Edward"];
// console.log(names);
// for (var i = 0; i < names.length; i++){
// 	console.log("hello" + names[i]);
// }


// names[100] = "jim";
// for (var i = 0; i < names.length; i++){
// 	console.log("hello" + names[i]);
// }





// 
var names2 = [" kenway", " haythem", " Edward"];

// var myObj = {
// 	name : "kenway",
// 	course : "html/css/js",
// 	platform : "coursera"
// };
// for (var prop in myObj){
// 	console.log(prop + ": " +myObj[prop]);
// }

// for (var name in names2){
// 	console.log("hello " + names2[name]);
// }

// names2.greeting = "hi!";

// for (var name in names2){
// 	console.log("hello " + names2[name]);
// }

// array counting
// var counter = 0;
// var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
// for (var i = 0; i < myArray.length; i++) {
//   counter++;
// }
// console.log(counter);



// closures
function makeMultiplier (multipier){

	function b(){
		console.log("multipier is: " + multipier)
	}
	b();

	return (
function (x){
	return multipier * x;
}
		);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
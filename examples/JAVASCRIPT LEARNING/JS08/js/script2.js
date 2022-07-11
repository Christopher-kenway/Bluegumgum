(function (window){
	var johnGreeter = {};
johnGreeter.name = "kenway";
johnGreeter.sayHi = function () {
	console.log("hi " + johnGreeter.name);
}

window.johnGreeter = johnGreeter;

})(window);




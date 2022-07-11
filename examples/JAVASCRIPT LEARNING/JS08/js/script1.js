(fuction (window) {
 Var kenwayGreeter = {};
kenwayGreeter.name = "kenway";
Var greeting = "hello ";
kenwayGreeter.sayHello = function () {
	console.log(greeting + kenwayGreeter.name);
}

 window.kenwayGreeter = kenwayGreeter;

})(window);
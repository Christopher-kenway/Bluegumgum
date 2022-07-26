document.addEventListner("DOMContentLoaded",
	function (event){

		function sayHello (event){
	this.textContent = "said it!";
	var name = 
   document.getElementById("name").value;
var message = "<h2>hello " + name +"!</h2>";

// document.getElementById("content")
// .textContent = message;
// }
// 		

document.
getElementById("content")
.innerHTML = message;


if (name === "Student"){
	var title = 
document.
	querySelector("#title")
	.textContent;
	title += "& lovin' it!";
	document.
	querySelector("h1")
	.textContent = title;
}

}

// unobstrustive event binding
document.querySelector("button")
.addEventListener("click", sayHello);



	}
	); 

// document.querySelector("button")
// .onclick = sayHello;


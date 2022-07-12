// // DOM manipultion
// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);


function sayHello (){
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

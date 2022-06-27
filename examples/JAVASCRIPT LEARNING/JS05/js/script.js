// // object creation
// var company = new Object();
// company.name = "facebook";
// company.ceo = new Object();
// company.ceo.firstName = "mark";
// company.ceo.favcolour = "blue";

// console.log(company);
// console.log("company ceo name is :"
// 	+ company.ceo.firstName);

// 	console.log(company["name"]);
// 	var stockPropName = "stock of company";
// 	company["stockPropName"] = 110;

// 	console.log("stock price is: " + company["stockPropName"]);

// better way: objet literal
var Tesla = {
	name: "Tesla", 
	Ceo: {
		FirstName: "Elon",
		FavColor: "black"
	},
	"stock of company": 110
};
console.log(Tesla);

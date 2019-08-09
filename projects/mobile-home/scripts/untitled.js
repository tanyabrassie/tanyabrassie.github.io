var swatch = {
	id: 234,
	name: 'TanyaIsSexy',
	type: 'BEAN'
};



//since there is no action on this function, "this" refers to the window.



function Swatch (id, name, type) { //SWATCH MAKING MACHINE AKA SWATCH CONSTRUCTOR FUNCTION
	this.id = id;
	this.name = name;
	this.type = type;
}

function SuperSwatch () {
	Swatch.apply(this, arguments);

}

SuperSwatch.prototype = Swatch;

// using the new keyword
var mySwatch = new Swatch(1, 'TanyaIsSexy1', 'BEAN');


// // what happens behind the scenes of new keyword, roughly
// function newSwatch () {
// 	var obj = {};

// 	Swatch.apply(obj, arguments); //apply swatch to the context of empty object
// 	return obj;
// }

// var mySwatch2 = newSwatch(1, 'TanyaIsSexy1', 'BEAN');




//Making object properties Private
//When creating an object, sometimes you don't want all the data available publicly so you create
// a function to act as a middle man and pass on the value.
function createSwatchObject () {
	var color = "green" //declaring an object with the property of "color"

	var swatch = { // creating a middle man function 
		getColor: function () {
			return color;
		}
	};

	return swatch;
}
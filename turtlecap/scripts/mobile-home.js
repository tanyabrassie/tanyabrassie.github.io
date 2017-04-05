	
var swatchOptions = $("input");

function updateColorSwatch (swatchType, $swatchClass, newColor) {

	if (swatchType == "radio") {
		$swatchClass.css("fill", newColor);
	
	} else {
		$swatchClass.toggle();
	}
}	

swatchOptions.change(function () {
	//var swatchId = $(this).attr("id");
	var swatchObject = allSwatches[$(this).attr("id")];

	var $swatchClass = $("." + swatchObject["swatch-class"]);
	var newColor = swatchObject.value;
	var swatchType = $(this).attr("type");

	updateColorSwatch(swatchType, $swatchClass, newColor);

});


//Make order form appear 
var $orderForm = $('#order-form');
var $orderButton = $('#order-button');

// var flag = true;

// $orderButton.click(function() {

// 	if (flag) {
// 		$orderForm.css("display", "block");
// 		$(this).css({"background": "#383030", "color": "#fff"});

// 		flag = false;

// 	} else {
// 		$orderForm.css("display", "none");
// 		$(this).css({"background": "#fd7675"});

// 		flag = true;
// 	}	

// });


$orderButton.click(function(){

	if ($orderForm.is(":hidden")) {
		$orderForm.slideDown("slow");
		$(this).css({"background": "#383030", "color": "#fff"});
	} else {
		$orderForm.slideUp("slow");
		$(this).css({"background": "#fd7675"});	
	}

});

var $infoWindow = $('#info-window');
var $infoIcon = $('#info-icon');

$infoIcon.mouseover(function(){
	
	$infoWindow.css("display", "block");

});

$infoIcon.mouseout(function (){
	$infoWindow.css("display", "none");
});






// var $mobileHomeContainer = $($(".svg-container")[0]);
// var $mobileHome = $($(".body-elements")[0]);

// $(window).on("scroll", function(e) {
// 	if ($(this).scrollTop() > 198) {
// 		$mobileHomeContainer.css( {"position": "fixed", "top": 0, "padding": "20px 0", "width": "85%", "border-bottom": "2px solid black"});

// 	} else {
// 		$mobileHomeContainer.css({"position": "initial", "padding-bottom": "0px", "width": "inherit", "border-bottom": "0px solid black"});
// 	}
// });



//CONSTRUCTOR FUNCTION ZONE, A 45 AND UP COMMUNITY.
//TODAYS ACTIVITY: ENCAPSULATION

// create the swatch constructor function which takes a the allSwatches object
//creates functions for each property and runs the objects properties through the 
//respective function thereby producing private values

//then create an empty array to store the new private values in once they are passed through
//the constructor function 

function Swatch (swatchObj) {

//
	swatchObj = swatchObj || {};

	var privateName = swatchObj.name;
	var privateSwatchName = swatchObj.swatchName;
	var privateSwatchClass = swatchObj.swatchClass;
	var privateHexValue = swatchObj.hexValue;

	// this.getName = function () {
	// 	return privateName;
	// }

	this.getSwatchName = function () {
		return privateSwatchName;
	}

	this.getSwatchClass = function () {
		return privateSwatchClass;
	}

	this.getHexvalue = function () {
		return privateHexValue;
	}
};

Swatch.prototype.getName = function() {};

var swatchesReborn = [];

for (var propertyId in allSwatches) {
	swatchesReborn.push(new Swatch(allSwatches[propertyId]));
}





































// var swatchOptions = $('input');

// function updateColorSwatch (swatchClass, cssUpdate) {
// 	var $swatch = $($("." + swatchClass));
// 	$swatch.css("fill", cssUpdate);
// }

// function removeAddOn (swatchClass, cssUpdate) {
// 	var $swatch = $($("." + swatchClass));
// 	$swatch.css("display", cssUpdate);
// }

// swatchOptions.change(function () {
// 	var swatchChecked = $(this);
// 	var swatchClass = swatchChecked.attr("swatch-class");
// 	var cssUpdate = swatchChecked.val();
// 	var inputType = swatchChecked.attr("type");

// 	if (inputType == "checkbox") {
// 		removeAddOn(swatchClass, cssUpdate);

// 	} else {
//  		updateColorSwatch(swatchClass, cssUpdate);

//  	}
// });



var swatchOptions = $("input");

function updateColorSwatch (swatchType, swatchClass, newColor) {
	var $swatch = $($("." + swatchClass));

	if (swatchType == "radio") {
		$swatch.css("fill", newColor);
	
	} else {
		$swatch.toggle();
	}
}	

swatchOptions.change(function () {
	var swatchChecked = $(this);
	var swatchClass = swatchChecked.attr("swatch-class");
	var swatchType = swatchChecked.attr("type");
	var newColor = swatchChecked.val();

	updateColorSwatch(swatchType, swatchClass, newColor);

});


var $mobileHomeContainer = $($(".svg-container")[0]);
var $mobileHome = $($(".body-elements")[0]);

$(window).on("scroll", function(e) {
	if ($(this).scrollTop() > 198) {
		$mobileHomeContainer.css( {"position": "fixed", "top": 0, "padding": "20px 0", "width": "85%", "border-bottom": "2px solid black"});

	} else {
		$mobileHomeContainer.css({"position": "initial", "padding-bottom": "0px", "width": "inherit", "border-bottom": "0px solid black"});
	}
});


var topSwatchChoices = {
	
	yellow: {
		name: "topstripe",
		swatchName: "yellow",
		"swatch-class": "body-stripe-top",
		value: "#d3d400",
		id: "top-color-a"
	},	
	seafoam: {
		name: "topstripe",
		swatchName: "seafoam",
		"swatch-class": "body-stripe-top",
		value: "#aafffd",
		id: "top-color-b"
	},
	teal: {
		name: "topstripe",
		swatchName: "teal",
		"swatch-class": "body-stripe-top",
		value: "#09dfff",
		id: "top-color-c"
	},
	red: {
		name: "topstripe",
		swatchName: "red",
		"swatch-class": "body-stripe-top",
		value: "#ff000",
		id: "top-color-d"
	}, 
	pink: {
		name: "topstripe",
		swatchName: "pink",
		"swatch-class": "body-stripe-top",
		value: "#ffc6ae",
		id: "top-color-e"
	}, 
	black: {
		name: "topstripe",
		swatchName: "black",
		"swatch-class": "body-stripe-top",
		value: "#000",
		id: "top-color-f"
	}
};



























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


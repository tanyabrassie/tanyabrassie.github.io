
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




var $mobileHomeContainer = $($(".svg-container")[0]);
var $mobileHome = $($(".body-elements")[0]);

$(window).on("scroll", function(e) {
	if ($(this).scrollTop() > 198) {
		$mobileHomeContainer.css( {"position": "fixed", "top": 0, "padding": "20px 0", "width": "85%", "border-bottom": "2px solid black"});

	} else {
		$mobileHomeContainer.css({"position": "initial", "padding-bottom": "0px", "width": "inherit", "border-bottom": "0px solid black"});
	}
});













// swatchOptions.change(function () {
// 	var swatchChecked = $(this);
// 	var swatchId = swatchChecked.attr("id");
// 	var swatchClass = swatchChecked.attr("swatch-class");
	
// 	var swatchType = swatchChecked.attr("type");
// 	var newColor = swatchChecked.val();

// 	updateColorSwatch(swatchType, swatchClass, newColor);

// });

























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


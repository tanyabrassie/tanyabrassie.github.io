
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
		$mobileHomeContainer.css( {"position": "fixed", "top": 0, "padding": "20px 0", "width": "85%"});

	} else {
		$mobileHomeContainer.css({"position": "initial", "padding-bottom": "0px", "width": "inherit"});
	}
});



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


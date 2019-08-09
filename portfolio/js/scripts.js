var $workImage = $('.work__image');

$workImage.mouseover(function(){

	//the second option transforms this into a jquery selector and then uses the jquery next() method to grab
	//the next element. The first waits to transform this into a jquery selector and uses javascript to get
	//the next Element sibling, and then transforms that into a jquery object.
	var $workText = $(this.nextElementSibling);
	var $workText1 = $(this).next();

	$workText.css("opacity", ".9");

}); 


$workImage.mouseout(function(){

	var $workText = $(this).next();
	$workText.css("opacity", "1");
});


//contact form

var $form = $('#ajax-contact');
var $submitMessage = $('#form-messages');

//prevent the form from doing its default behavior
$form.submit(function(event){

	event.preventDefault();

	//serialize the data so that it can be sent with an AJAX request
	var $formData = $form.serialize();

	$.ajax({	
		type: 'POST',
		url: $form.attr('action'),
		data: $formData
	})
	.done(function(response) {
	    // Make sure that the formMessages div has the 'success' class.
	    $submitMessage.removeClass('error');
	    $submitMessage.addClass('success');

	    // Set the message text.
	    $submitMessage.text(response);

	    // Clear the form.
	    $('#name').val('');
	    $('#email').val('');
	    $('#message').val('');
	})
	.fail(function(data) {
		// Make sure that the formMessages div has the 'error' class.
		$submitMessage.removeClass('success');
		$submitMessage.addClass('error');

		// Set the message text.
		if (data.responseText !== '') {
			$submitMessage.text(data.responseText);
		} else {
			$submitMessage.text('Oops! An error occured and your message could not be sent.');
		}
		});
});
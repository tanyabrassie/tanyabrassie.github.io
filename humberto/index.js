

// create file picker
var filePicker = document.getElementById('fileSelect');
var previewContainer = document.getElementById('previewContainer');
var circleArray = document.getElementsByClassName('ratings__circle');
var submitButton = document.getElementById('submitButton');
var clearButton = document.getElementById('clearButton');

submitButton.disabled = true;
console.log(circleArray);

//create imagePreview
// var imagePreview = document.getElementById('imagePreview');

//create a function that takes an event, and gets the target from the event.
function handleFileSelect(e) {
  var file = e.target.files[0];   // gets first file stored on event

  //create new file reader
  const reader = new FileReader();

  //when the reader loads the file set the source
  reader.addEventListener("load", function () {
    var imagePreview = document.createElement("img");

    imagePreview.src = reader.result;

    // previewContainer.appendChild(imagePreview);
    filePicker.replaceWith(imagePreview);
  }, false);

  // filePicker.replaceWith(imagePreview);

  // use readAsDataURL method from fileReader
  reader.readAsDataURL(file);

  submitButton.disabled = false;

}

filePicker.addEventListener('change', handleFileSelect, false);

submitButton.addEventListener('click', function() {
  var randomNumber = (Math.random() * 10).toFixed();
  console.log(randomNumber);

  for (var i = 0; i < randomNumber; i++) {
    circleArray[i].classList.add('solid');
  }

  submitButton.disabled = true;

});

clearButton.addEventListener('click', function() {
});


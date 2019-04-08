

// create file picker
var filePicker = document.getElementById('fileSelect');
var previewContainer = document.getElementById('previewContainer');
var circleArray = document.getElementsByClassName('ratings__circle');
var submitButton = document.getElementById('submitButton');
var clearButton = document.getElementById('clearButton');

var uploadBox = document.getElementById('uploadBox');

submitButton.disabled = true;
clearButton.disabled = true;

console.log(circleArray);

//create imagePreview
// var imagePreview = document.getElementById('imagePreview');

//create a function that takes an event, and gets the target from the event.
function handleFileSelect(e) {

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].classList.remove('solid');
  }
  var file = e.target.files[0];   // gets first file stored on event
  //create new file reader
  const reader = new FileReader();

  //when the reader loads the file set the source
  reader.addEventListener("load", function () {
    var imagePreview = document.createElement("img");
    imagePreview.className = 'upload-box__image';
    imagePreview.id = 'imagePreview';
    imagePreview.src = reader.result;
  
    uploadBox.appendChild(imagePreview);
    // filePicker.replaceWith(imagePreview);
  }, false);

  // use readAsDataURL method from fileReader
  reader.readAsDataURL(file);

  submitButton.disabled = false;
  clearButton.disabled = false;
}

filePicker.addEventListener('change', handleFileSelect, false);

submitButton.addEventListener('click', function() {
  var randomNumber = (Math.random() * 10).toFixed();

  for (var i = 0; i < randomNumber; i++) {
    circleArray[i].classList.add('solid');
  }

  submitButton.disabled = true;

  clearButton.addEventListener('click', function() {
    document.getElementById('imagePreview').remove();
    filePicker.value = null;

    for (var i = 0; i < randomNumber; i++) {
      circleArray[i].classList.remove('solid');
    }
  });
});


var colorToggle = document.getElementById('colorToggle');
var toggleLabel = document.getElementById('toggleLabel');

colorToggle.addEventListener('click', function(){
  if(colorToggle.checked) {
    document.getElementsByClassName("container-outer")[0].classList.add('old-fashioned');
    toggleLabel.innerText = '🤪Next Gen';
    toggleLabel.classList.remove('old-label');
    toggleLabel.classList.add('modern-label');
  
  } else {
    document.getElementsByClassName("container-outer")[0].classList.remove('old-fashioned');
    toggleLabel.innerText = '👀Old Fashioned';
    toggleLabel.classList.remove('modern-label');
    toggleLabel.classList.add('old-label');

  } 
})

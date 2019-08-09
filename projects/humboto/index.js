

// grab references to key elements
var filePicker = document.getElementById('fileSelect');
var previewContainer = document.getElementById('previewContainer');
var circleArray = document.getElementsByClassName('ratings__circle');
var submitButton = document.getElementById('submitButton');
var clearButton = document.getElementById('clearButton');
var uploadBox = document.getElementById('uploadBox');
var numericRating = document.getElementById('numeric-rating');
var ratingText = document.getElementById('rating-text');
var uploadPrompt = document.getElementById('upload-prompt');
var yearTag = document.getElementById('year-tag');


//create the image preview
var imagePreview = document.createElement("img");
imagePreview.className = 'upload-box__image';
imagePreview.id = 'imagePreview';

//set buttons to disabled
submitButton.disabled = true;
clearButton.disabled = true;


//create a function that takes an event, and gets the target from the event.
function handleFileSelect(e) {
  
  if (imagePreview) {
    imagePreview.remove();
  }
  
  numericRating.innerHTML = '';
  ratingText.innerHTML = '';

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].classList.remove('solid');
  }

  var file = e.target.files[0];   // gets first file stored on event
  

  if (!!file) {
    //create new file reader
    const reader = new FileReader();

    //when the reader loads the file set the source
    reader.addEventListener("load", function () {
      imagePreview.src = reader.result;
  
      uploadBox.appendChild(imagePreview);
    // filePicker.replaceWith(imagePreview);
    }, false);
  
    reader.readAsDataURL(file);
    uploadPrompt.classList.add('is-invisible');
    submitButton.disabled = false;
    clearButton.disabled = false;
  } else {
    uploadPrompt.classList.remove('is-invisible');
  }
}

//humor analysis generates a random number and fills in the appropriate dots
function humorAnalysis() {
  var randomNumber = (Math.random() * 10).toFixed();
  
  for (var i = 0; i < randomNumber; i++) {
    circleArray[i].classList.add('solid');
  }

  numericRating.innerHTML = randomNumber + '/10';
  ratingText.innerHTML = humorRatings[randomNumber];
}

// submitting the button calls humor analysis, changes the submit button to true
// and adds an event listener to the clear button
function onSubmit() {
  humorAnalysis();
  submitButton.disabled = true;
}


// clear analysis always removes the preview and removes circles then changes button to disabled.
function clearAnalysis() {
  document.getElementById('imagePreview').remove();
  numericRating.innerHTML = '';
  ratingText.innerHTML = '';
  filePicker.value = null;

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].classList.remove('solid');
  }

  clearButton.disabled = true;
  submitButton.disabled = true;
  uploadPrompt.classList.remove('is-invisible');
}

clearButton.addEventListener('click', clearAnalysis);


//add handleFileSelect to a change event listener
filePicker.addEventListener('change', handleFileSelect, false);

// on submit generate a random number, cahgne to true and add event listern
submitButton.addEventListener('click', onSubmit);


var colorToggle = document.getElementById('colorToggle');
var toggleLabel = document.getElementById('toggleLabel');

colorToggle.addEventListener('click', function(){
  if(colorToggle.checked) {
    document.getElementsByClassName("container-outer")[0].classList.add('old-fashioned');
    toggleLabel.innerText = '🤪Next Gen';
    toggleLabel.classList.remove('old-label');
    toggleLabel.classList.add('modern-label');
    yearTag.innerHTML = '1952';
  
  } else {
    document.getElementsByClassName("container-outer")[0].classList.remove('old-fashioned');
    toggleLabel.innerText = '👀Old Fashioned';
    toggleLabel.classList.remove('modern-label');
    toggleLabel.classList.add('old-label');
    yearTag.innerHTML = '2019';
  } 
})

var humorRatings = {
  0: '⚠️ No humor detected ⚠️',
  1: 'Humorously low. Is this a joke? 🧐',
  2: 'Really bad. Do not show to friends ☹️',
  3: 'Mildly low, it could be worse!! 😬',
  4: '😑 Just okay',
  5: 'Medium+ - Humor of questionable quality is evident.',
  6: 'Barely lulzy',
  7: '😛 heh - Almost a chuckle',
  8: '😝 lol, haha',
  9: 'LOL - P. High',
  10: 'XD XD! LOL - Supreme 🤪 🤪'
}
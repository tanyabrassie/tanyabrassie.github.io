lottie.setQuality(2);

console.log('in DESKTOP ANIMATION.JS');

const watchCan = document.getElementById('watch-canvas');
const teeCan = document.getElementById('tee-canvas');
const sunglassesCan = document.getElementById('sunglasses-canvas');

// get all divs to attch animations to
const perfumeAnimationDiv = document.getElementById('lottie-perfume');
const sunglassesAnimationDiv = document.getElementById('lottie-sunglasses');
const teeAnimationDiv = document.getElementById('lottie-tee');
const watchAnimationDiv = document.getElementById('lottie-watch'); 

const shoeBackDiv = document.getElementById('animation-back-shoe');
const shoeMidDiv = document.getElementById('animation-mid-shoe');
const shoeFrontDiv = document.getElementById('animation-front-shoe');

const animationDivs = [perfumeAnimationDiv, sunglassesAnimationDiv, 
  teeAnimationDiv, watchAnimationDiv]; 

const teeAnimation = lottie.loadAnimation({
  renderer: 'canvas',
  loop: true,
  autoplay: false,
  animationData: tee,
  rendererSettings: {
    context: teeCan.getContext('2d'), // the canvas context
    scaleMode: 'xMidYMid slice',
  },
});

const perfumeAnimation = lottie.loadAnimation({
  container: perfumeAnimationDiv,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  animationData: perfume,
  rendererSettings: {
  progressiveLoad: true, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
  },
});

const watchAnimation = lottie.loadAnimation({
  renderer: 'canvas',
  loop: true,
  autoplay: false,
  animationData: watch,
  rendererSettings: {
    context: watchCan.getContext('2d'), // the canvas context
    scaleMode: 'xMidYMid slice',
    clearCanvas: false,
  },
});


const sunglassesAnimation = lottie.loadAnimation({
  renderer: 'canvas',
  loop: true,
  autoplay: false,
  animationData: sunglasses,
  rendererSettings: {
    context: sunglassesCan.getContext('2d'), // the canvas context
    scaleMode: 'xMidYmin slice',
    clearCanvas: false,
  },
});


const shoeBackAnimation = lottie.loadAnimation({
  container: shoeBackDiv,
  renderer: 'canvas',
  loop: false,
  autoplay: false,
  animationData: heroShoeBack,
});

const shoeMidAnimation = lottie.loadAnimation({
  container: shoeMidDiv,
  renderer: 'canvas',
  loop: false,
  autoplay: false,
  animationData: heroShoeMid,
});

const shoeFrontAnimation = lottie.loadAnimation({
  container: shoeFrontDiv,
  renderer: 'canvas',
  loop: false,
  autoplay: false,
  animationData: heroShoeFront,
});

shoeFrontAnimation.addEventListener('loaded_images', () => {
  shoeFrontAnimation.play();
  shoeMidAnimation.play();
  shoeBackAnimation.play();
});

const animationDict = {
  'lottie-perfume' : perfumeAnimation,
  'lottie-sunglasses' : sunglassesAnimation,
  'lottie-tee' : teeAnimation,
  'lottie-watch' : watchAnimation,
};

const transparentText = document.querySelectorAll('.transparent');

(function() {
  let windowHeight;
  function init() {
    windowHeight = window.innerHeight;
  }
  
  function triggerAnimations() {
    for (var i = 0; i < animationDivs.length; i++) {
      var animationDiv = animationDivs[i];
      var positionFromTop = animationDiv.getBoundingClientRect().top;
      var height = animationDiv.getBoundingClientRect().height;
      const animation = animationDict[animationDiv.id];
      
      if (positionFromTop - windowHeight <= 0 && positionFromTop + height >=0) {
        animation.play();
      } else {
        animation.stop();
      }
    }
  }

  function fadeInText() {
    console.log('fade in text');
    for (var i = 0; i < transparentText.length; i++) {
      var headline = transparentText[i];
      var positionFromTop = headline.getBoundingClientRect().top;
      var height = headline.getBoundingClientRect().height;
      
      if (positionFromTop - windowHeight <= 0 && positionFromTop + height >=0) {
        headline.classList.add('fade-in');
      } else {
        headline.classList.remove('fade-in');
      }
    }
  }
  window.addEventListener('scroll', triggerAnimations);
  window.addEventListener('scroll', fadeInText);
  window.addEventListener('resize', init);
  init();
  checkPosition();
  checkHeadlinePosition();
})();


const animationDict = {
  'lottie-perfume' : perfumeAnimation,
  'lottie-sunglasses' : sunglassesAnimation,
  'lottie-tee' : teeAnimation,
  'lottie-watch' : watchAnimation,
};

const transparentText = document.querySelectorAll('.transparent');

function addScrollEffects () {
    let windowHeight;
    function init() {
      windowHeight = window.innerHeight;
    }
    
    function triggerAnimations() {
      for (var i = 0; i < animationDivs.length; i++) {
        var animationDiv = animationDivs[i];
        var positionFromTop = animationDiv.getBoundingClientRect().top;
        var height = animationDiv.getBoundingClientRect().height;
        const animation = animationDict[animationDiv.id];
        
        if (positionFromTop - windowHeight <= 0 && positionFromTop + height >=0) {
          animation.play();
        } else {
          animation.stop();
        }
      }
    }
  
    function fadeInText() {
      console.log('fade in text');
      for (var i = 0; i < transparentText.length; i++) {
        var headline = transparentText[i];
        var positionFromTop = headline.getBoundingClientRect().top;
        var height = headline.getBoundingClientRect().height;
        
        if (positionFromTop - windowHeight <= 0 && positionFromTop + height >=0) {
          headline.classList.add('fade-in');
        } else {
          headline.classList.remove('fade-in');
        }
      }
    }
    window.addEventListener('scroll', triggerAnimations);
    window.addEventListener('scroll', fadeInText);
    window.addEventListener('resize', init);
    init();
    checkPosition();
    checkHeadlinePosition();
  };
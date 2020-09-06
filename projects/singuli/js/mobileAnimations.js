import {mobileTee, mobilePerfume, mobileWatch, mobileSunglasses} from '../animations/mobileLotties.js';

const watchCanMob = document.getElementById('watch-canvas-mobile');
const teeCanMob = document.getElementById('tee-canvas-mobile');
const sunglassesCanMob = document.getElementById('sunglasses-canvas-mobile');
const perfumeCanMob = document.getElementById('perfume-canvas-mobile');

// get all divs to attch animations to
const perfumeAnimationDivMobile = document.getElementById('lottie-perfume-mobile');
const sunglassesAnimationDivMobile = document.getElementById('lottie-sunglasses-mobile');
const teeAnimationDivMobile = document.getElementById('lottie-tee-mobile');
const watchAnimationDivMobile = document.getElementById('lottie-watch-mobile'); 

const mobileAnimationDivs = [perfumeAnimationDivMobile, sunglassesAnimationDivMobile, teeAnimationDivMobile, watchAnimationDivMobile]; 

const mobileAnimationData = {
  'lottie-perfume-mobile' : mobilePerfume,
  'lottie-sunglasses-mobile' : mobileSunglasses,
  'lottie-tee-mobile' : mobileTee,
  'lottie-watch-mobile' : mobileWatch,
};

const transparentText = document.querySelectorAll('.transparent');

const watchAnimationMobile = lottie.loadAnimation({
  container: watchAnimationDivMobile,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: mobileWatch,
  rendererSettings: {
    progressiveLoad: false,
  },
});

const teeAnimationMobile = lottie.loadAnimation({
  container: teeAnimationDivMobile,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: mobileTee,
  rendererSettings: {
    progressiveLoad: false,
  },
});

const sunglassesAnimationMobile = lottie.loadAnimation({
  container: sunglassesAnimationDivMobile,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: mobileSunglasses,
  rendererSettings: {
    progressiveLoad: false,
  }
});

const perfumeAnimationMobile = lottie.loadAnimation({
  container: perfumeAnimationDivMobile,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: mobilePerfume,
  rendererSettings: {
    progressiveLoad: false,
  }
});

const mobileAnimationDict = {
  'lottie-perfume-mobile' : perfumeAnimationMobile,
  'lottie-sunglasses-mobile' : sunglassesAnimationMobile,
  'lottie-tee-mobile' : teeAnimationMobile,
  'lottie-watch-mobile' : watchAnimationMobile,
};

function checkMobilePositions(windowHeight) {
  for (var i = 0; i < mobileAnimationDivs.length; i++) {

    // go through each animation div and find its size
    const animationDiv = mobileAnimationDivs[i];
    const positionFromTop = animationDiv.getBoundingClientRect().top;
    const height = animationDiv.getBoundingClientRect().height;

    const animation = mobileAnimationDict[animationDiv.id];

    // if div is in view
    if (positionFromTop - windowHeight <= 0 && positionFromTop + height >=0) {      
      animation.play(); 
    } else {
      animation.stop();
    }
  }
}

function fadeInTextMobile(windowHeight) {
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

(function() {
  let windowHeight;
  function init() {
    windowHeight = window.innerHeight;
  }
  
  function checkElementPositions() {
    checkMobilePositions(windowHeight);
    fadeInTextMobile(windowHeight);
  }

  window.addEventListener('scroll', checkElementPositions);
  init();
  checkElementPositions();
})();

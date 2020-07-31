lottie.setQuality(1);
lottie.setSubframeRendering(false);

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


const mobileAnimations = {
  'lottie-perfume-mobile' : null,
  'lottie-sunglasses-mobile' : null,
  'lottie-tee-mobile' : null,
  'lottie-watch-mobile' : null,
};

const scaleModes = {
  'lottie-perfume-mobile' : 'xMidYMid slice',
  'lottie-sunglasses-mobile' : 'xMidYMin slice',
  'lottie-tee-mobile' : 'xMidYMid slice',
  'lottie-watch-mobile' : 'xMidYMid slice',
};

const mobileCanvases = {
  'lottie-sunglasses-mobile' : sunglassesCanMob,
  'lottie-tee-mobile' : teeCanMob,
  'lottie-watch-mobile' : watchCanMob,
  'lottie-perfume-mobile' : perfumeCanMob,
};

const mobileAnimationData = {
  'lottie-perfume-mobile' : mobilePerfume,
  'lottie-sunglasses-mobile' : mobileSunglasses,
  'lottie-tee-mobile' : mobileTee,
  'lottie-watch-mobile' : mobileWatch,
};

console.log('mobileAnimationDivs', mobileAnimationDivs);

const transparentText = document.querySelectorAll('.transparent');

function checkMobilePositions(windowHeight) {
  for (var i = 0; i < mobileAnimationDivs.length; i++) {

    // go through each animation div and find its size
    var animationDiv = mobileAnimationDivs[i];
    var positionFromTop = animationDiv.getBoundingClientRect().top;
    var height = animationDiv.getBoundingClientRect().height;

    // IF ANIMATION IS IN VIEW
    if (positionFromTop - windowHeight <= 0 && positionFromTop + height >=0) {      
      
      // IF ANIMATION IS NOT NULL 
      if (!mobileAnimations[animationDiv.id]) {
        console.log('creating animation');
        const animation = lottie.loadAnimation({
          renderer: 'canvas',
          name: [animationDiv.id],
          loop: true,
          autoplay: false,
          animationData: mobileAnimationData[[animationDiv.id]],
          rendererSettings: {
          context: mobileCanvases[animationDiv.id].getContext('2d'),
          preserveAspectRatio: scaleModes[animationDiv.id],
          },
        });
        
        // log animation
        mobileAnimations[animationDiv.id] = animation;
  
        // update animation dict with animation
        animation.play();
        console.log('animation data', mobileAnimationData);
      } 
    } else {
      if (!!mobileAnimations[animationDiv.id]) {
        lottie.destroy([animationDiv.id]);
        mobileAnimations[animationDiv.id] = null;
      }
    }
  }
}

// function fadeInTextMobile(windowHeight) {
//   for (var i = 0; i < transparentText.length; i++) {
//     var headline = transparentText[i];
//     var positionFromTop = headline.getBoundingClientRect().top;
//     var height = headline.getBoundingClientRect().height;
    
//     if (positionFromTop - windowHeight <= 0 && positionFromTop + height >=0) {
//       headline.classList.add('fade-in');
//     } else {
//       headline.classList.remove('fade-in');
//     }
//   }
// }

(function() {
  let windowHeight;
  function init() {
    windowHeight = window.innerHeight;
  }
  
  function checkElementPositions() {
    checkMobilePositions(windowHeight);
    // fadeInTextMobile(windowHeight);
  }

  window.addEventListener('scroll', checkElementPositions);
  init();
  checkElementPositions();
})();

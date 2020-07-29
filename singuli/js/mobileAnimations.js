lottie.setQuality(2);

console.log('in MOBILE ANIMATIONS.JS');

const watchCanMob = document.getElementById('watch-canvas-mobile');
const teeCanMob = document.getElementById('tee-canvas-mobile');
const sunglassesCanMob = document.getElementById('sunglasses-canvas-mobile');

// get all divs to attch animations to
const perfumeAnimationDivMobile = document.getElementById('lottie-perfume-mobile');
const sunglassesAnimationDivMobile = document.getElementById('lottie-sunglasses-mobile');
const teeAnimationDivMobile = document.getElementById('lottie-tee-mobile');
const watchAnimationDivMobile = document.getElementById('lottie-watch-mobile'); 

const mobileAnimationDivs = [perfumeAnimationDivMobile, sunglassesAnimationDivMobile, teeAnimationDivMobile, watchAnimationDivMobile]; 

const teeAnimationMobile = lottie.loadAnimation({
  renderer: 'canvas',
  loop: true,
  autoplay: false,
  animationData: mobileTee,
  rendererSettings: {
    context: teeCanMob.getContext('2d'), // the canvas context
    scaleMode: 'xMidYMid slice',
    // clearCanvas: false,
  },
});

const perfumeAnimationMobile = lottie.loadAnimation({
  container: perfumeAnimationDivMobile,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  animationData: mobilePerfume,
  rendererSettings: {
    progressiveLoad: true, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
  },
});

const watchAnimationMobile = lottie.loadAnimation({
  renderer: 'canvas',
  loop: true,
  autoplay: false,
  animationData: mobileWatch,
  rendererSettings: {
    context: watchCanMob.getContext('2d'),
    scaleMode: 'xMidYMid slice',
    clearCanvas: false,
  },
});

const sunglassesAnimationMobile = lottie.loadAnimation({
  renderer: 'canvas',
  loop: true,
  autoplay: false,
  animationData: mobileSunglasses,
  rendererSettings: {
    context: sunglassesCanMob.getContext('2d'),
    preserveAspectRatio: 'xMidYMin slice', 
    clearCanvas: false,
  },
});

const mobileAnimationDict = {
  'lottie-perfume-mobile' : perfumeAnimationMobile,
  'lottie-sunglasses-mobile' : sunglassesAnimationMobile,
  'lottie-tee-mobile' : teeAnimationMobile,
  'lottie-watch-mobile' : watchAnimationMobile,
};

(function() {
  let windowHeight;
  function init() {
    windowHeight = window.innerHeight;
  }
  function checkPosition() {
    for (var i = 0; i < mobileAnimationDivs.length; i++) {
      var animationDiv = mobileAnimationDivs[i];
      var positionFromTop = animationDiv.getBoundingClientRect().top;
      var height = animationDiv.getBoundingClientRect().height;
      const animation = mobileAnimationDict[animationDiv.id];
      
      if (positionFromTop - windowHeight <= 0 && positionFromTop + height >=0) {
        animation.play();
      } else {
        animation.stop();
      }
    }
  }

//   function checkHeadlinePosition() {
//     for (var i = 0; i < transparentText.length; i++) {
//       var headline = transparentText[i];
//       var positionFromTop = headline.getBoundingClientRect().top;
//       var height = headline.getBoundingClientRect().height;
      
//       if (positionFromTop - windowHeight <= 0 && positionFromTop + height >=0) {
//         headline.classList.add('fade-in');
//       } else {
//         headline.classList.remove('fade-in');
//       }
//     }
//   }
  window.addEventListener('scroll', checkPosition);
//   window.addEventListener('scroll', checkHeadlinePosition);
//   window.addEventListener('resize', init);
  init();
  checkPosition();
//   checkHeadlinePosition();
// })();
})();

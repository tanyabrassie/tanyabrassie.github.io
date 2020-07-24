lottie.setQuality(2);

console.log('in MOBILE ANIMATIONS.JS');

// get all divs to attch animations to
 const perfumeAnimationDivMobile = document.getElementById('lottie-perfume-mobile');
const sunglassesAnimationDivMobile = document.getElementById('lottie-sunglasses-mobile');
const teeAnimationDivMobile = document.getElementById('lottie-tee-mobile');
const watchAnimationDivMobile = document.getElementById('lottie-watch-mobile'); 

// const shoeBackDiv = document.getElementById('animation-back-shoe');
// const shoeMidDiv = document.getElementById('animation-mid-shoe');
// const shoeFrontDiv = document.getElementById('animation-front-shoe');

const mobileAnimationDivs = [perfumeAnimationDivMobile, sunglassesAnimationDivMobile, teeAnimationDivMobile, watchAnimationDivMobile]; 

const teeAnimationMobile = lottie.loadAnimation({
  container: teeAnimationDivMobile,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  animationData: mobileTee,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet',
    className: 'tee__animation__canvas__mobile',
  }
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
  container: watchAnimationDivMobile,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  animationData: mobileWatch,
  rendererSettings: {
    // context: canvasContext, // the canvas context
    preserveAspectRatio: 'xMinYMid meet', // Supports the same options as the svg element's preserveAspectRatio property
    clearCanvas: false,
    progressiveLoad: true, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
    // hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
    className: 'watch__animation__canvas',
  },
});

const sunglassesAnimationMobile = lottie.loadAnimation({
  container: sunglassesAnimationDivMobile,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  animationData: mobileSunglasses,
  rendererSettings: {
    preserveAspectRatio: 'xMaxYMax meet', 
    clearCanvas: true,
    // progressiveLoad: true, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
    // hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
    className: 'sunglasses__animation__canvas',
  },
});


// const shoeBackAnimation = lottie.loadAnimation({
//   container: shoeBackDiv,
//   renderer: 'canvas',
//   loop: false,
//   autoplay: false,
//   animationData: heroShoeBack,
// });

// const shoeMidAnimation = lottie.loadAnimation({
//   container: shoeMidDiv,
//   renderer: 'canvas',
//   loop: false,
//   autoplay: false,
//   animationData: heroShoeMid,
// });

// const shoeFrontAnimation = lottie.loadAnimation({
//   container: shoeFrontDiv,
//   renderer: 'canvas',
//   loop: false,
//   autoplay: false,
//   animationData: heroShoeFront,
// });

// shoeFrontAnimation.addEventListener('loaded_images', () => {
//   shoeFrontAnimation.play();
//   shoeMidAnimation.play();
//   shoeBackAnimation.play();
// });


const mobileAnimationDict = {
  'lottie-perfume-mobile' : perfumeAnimationMobile,
  'lottie-sunglasses-mobile' : sunglassesAnimationMobile,
  'lottie-tee-mobile' : teeAnimationMobile,
  'lottie-watch-mobile' : watchAnimationMobile,
};

// const mobileTransparent = document.querySelectorAll('.transparent');

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

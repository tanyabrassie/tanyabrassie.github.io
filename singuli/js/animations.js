lottie.setQuality(2);

const perfumeAnimationDiv = document.getElementById('lottie-perfume');
const sunglassesAnimationDiv = document.getElementById('lottie-sunglasses');
const teeAnimationDiv = document.getElementById('lottie-tee');
const watchAnimationDiv = document.getElementById('lottie-watch'); 

const shoeBackDiv = document.getElementById('animation-back-shoe');
const shoeMidDiv = document.getElementById('animation-mid-shoe');
const shoeFrontDiv = document.getElementById('animation-front-shoe');

const animationDivs = [perfumeAnimationDiv, sunglassesAnimationDiv, teeAnimationDiv, watchAnimationDiv]; 

const teeAnimation = lottie.loadAnimation({
  container: teeAnimationDiv,
  renderer: 'canvas',
  loop: true,
  autoplay: false,
  animationData: tee,
});

const perfumeAnimation = lottie.loadAnimation({
  container: perfumeAnimationDiv,
  renderer: 'canvas',
  loop: true,
  autoplay: false,
  animationData: perfume,
});

const watchAnimation = lottie.loadAnimation({
  container: watchAnimationDiv,
  renderer: 'canvas',
  loop: true,
  autoplay: false,
  animationData: watch,
  rendererSettings: {
    // context: canvasContext, // the canvas context
    preserveAspectRatio: 'none', // Supports the same options as the svg element's preserveAspectRatio property
    clearCanvas: false,
    progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
    hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
    className: 'some-css-class-name',
    id: 'some-id',
  },
});

const sunglassesAnimation = lottie.loadAnimation({
  container: sunglassesAnimationDiv,
  renderer: 'canvas',
  loop: true,
  autoplay: true,
  animationData: sunglasses,
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
  console.log('im loading the images!');

  shoeFrontAnimation.play();
  shoeMidAnimation.play();
  shoeBackAnimation.play();
});

// shoeFrontAnimation.addEventListener('onComplete', () => {
//   console.log('im complete!');
// });

// shoeFrontAnimation.onLoopComplete = function() {
//   console.log('completed now?');
// };


// setTimeout(() => {
//   shoeFrontAnimation.play();
// }, 10);

// setTimeout(() => {
//   shoeMidAnimation.play();
// }, 200);

// setTimeout(() => {
//   shoeBackAnimation.play();
// }, 210);

const animationDict = {
  'lottie-perfume' : perfumeAnimation,
  'lottie-sunglasses' : sunglassesAnimation,
  'lottie-tee' : teeAnimation,
  'lottie-watch' : watchAnimation,
};


(function() {
  let windowHeight;
  function init() {
    windowHeight = window.innerHeight;
  }
  function checkPosition() {
    for (var i = 0; i < animationDivs.length; i++) {
      var animationDiv = animationDivs[i];
      console.log(animationDiv);
      console.log('hi');
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
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);
  init();
  checkPosition();
})();

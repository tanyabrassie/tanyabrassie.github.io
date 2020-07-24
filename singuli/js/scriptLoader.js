console.log('in SCRIPTLOADER.js?');

const isMobile = window.innerWidth < 767;
console.log('ismobile?', isMobile);

function appendAnimationScript() {
  console.log('appending animation scripts');
  const animations = document.createElement('script');
  animations.src =  isMobile ? 'js/mobileAnimations.js' : 'js/desktopAnimations.js';
  document.body.appendChild(animations);

  loadOppositeLottieScript();
}

function loadOppositeLottieScript() {
  console.log('loading additional animations');
  const additionalLotties = document.createElement('script');
  const lottiePath = isMobile ? 'animations/bodyLottieAnimations.js' : 'animations/mobileLottieAnimations.js';
  additionalLotties.src = lottiePath;
  document.body.appendChild(additionalLotties);

  additionalLotties.onload = loadOppositeAnimationScript;
}

function loadOppositeAnimationScript() {
  const additionAnimations = document.createElement('script');
  const animationPath = isMobile ? 'js/desktopAnimations.js' : 'js/mobileAnimations.js';
  additionAnimations.src = animationPath;
  document.body.appendChild(additionAnimations);
}



// if mobile browser is used import mobile versions of things
if (isMobile) {
  console.log('MOBILE');
  // load the lottie mobile animations
  const mobileLottie = document.createElement('script');
  mobileLottie.src = 'animations/mobileLottieAnimations.js';
  document.head.appendChild(mobileLottie);

  // THEN load animation script
  mobileLottie.onload = appendAnimationScript;

} else {
  console.log('DESKTOP');
  // load the body lottie animations
  const desktopLottie = document.createElement('script');
  desktopLottie.src = 'animations/bodyLottieAnimations.js';
  document.body.appendChild(desktopLottie);

  //Then load animation script
  desktopLottie.onload = appendAnimationScript;
}

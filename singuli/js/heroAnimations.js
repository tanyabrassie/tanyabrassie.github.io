import {heroShoeBack, heroShoeMid, heroShoeFront, mobileShoeFront, mobileShoeBack, mobileShoeMid} from '../animations/heroLotties.js';

const shoeBackDiv = document.getElementById('animation-back-shoe');
const shoeMidDiv = document.getElementById('animation-mid-shoe');
const shoeFrontDiv = document.getElementById('animation-front-shoe');

const shoeBackDivMobile = document.getElementById('animation-back-shoe-mobile');
const shoeMidDivMobile = document.getElementById('animation-mid-shoe-mobile');
const shoeFrontDivMobile = document.getElementById('animation-front-shoe-mobile');

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

shoeFrontAnimation.play();
shoeMidAnimation.play();
shoeBackAnimation.play();

const shoeBackAnimationMobile = lottie.loadAnimation({
  container: shoeBackDivMobile,
  renderer: 'canvas',
  loop: false,
  autoplay: false,
  animationData: mobileShoeBack,
});

const shoeMidAnimationMobile = lottie.loadAnimation({
  container: shoeMidDivMobile,
  renderer: 'canvas',
  loop: false,
  autoplay: false,
  animationData: mobileShoeMid,
});

const shoeFrontAnimationMobile = lottie.loadAnimation({
  container: shoeFrontDivMobile,
  renderer: 'canvas',
  loop: false,
  autoplay: false,
  animationData: mobileShoeFront,
});

shoeFrontAnimationMobile.play();
shoeMidAnimationMobile.play();
shoeBackAnimationMobile.play();

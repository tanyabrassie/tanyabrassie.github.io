import {heroShoeBack, heroShoeMid, heroShoeFront} from '../animations/heroLotties.js';

const shoeBackDiv = document.getElementById('animation-back-shoe');
const shoeMidDiv = document.getElementById('animation-mid-shoe');
const shoeFrontDiv = document.getElementById('animation-front-shoe');

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

var perfumeAnimation = lottie.loadAnimation({
  container: document.getElementsByClassName('perfume__animation')[0],
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: perfume,
});

var sunglassesAnimation = lottie.loadAnimation({
  container: document.getElementsByClassName('sunglasses__animation')[0],
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: sunglasses,
});

var heroShoeBackAnimation = lottie.loadAnimation({
  container: document.getElementsByClassName('hero__animation__back')[0],
  renderer: 'svg',
  loop: false,
  autoplay: false,
  animationData: heroShoeBack,
});

var heroShoeMidAnimation = lottie.loadAnimation({
  container: document.getElementsByClassName('hero__animation__mid')[0],
  renderer: 'svg',
  loop: false,
  autoplay: false,
  animationData: heroShoeMid,
});

var heroShoeFrontAnimation = lottie.loadAnimation({
  container: document.getElementsByClassName('hero__animation__front')[0],
  renderer: 'svg',
  loop: false,
  autoplay: true,
  animationData: heroShoeFront,
});

setTimeout(() => {
  heroShoeFrontAnimation.play();
}, 100);

setTimeout(() => {
  heroShoeMidAnimation.play();
}, 200);

setTimeout(() => {
  heroShoeBackAnimation.play();
}, 210);


function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  console.log('hi');

  // Only completely visible elements return true:
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  console.log('isVisible', isVisible);
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
};

console.log(document);
const perfumeSection = document.getElementById('perfume-section');
console.log(perfumeSection);
isScrolledIntoView(perfumeSection);



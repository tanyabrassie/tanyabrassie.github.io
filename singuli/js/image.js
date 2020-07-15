var imageAnimation = lottie.loadAnimation({
  container: document.getElementsByClassName('perfume__animation-image')[0],
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: perfume,
});

var sunglassesAnimation = lottie.loadAnimation({
  container: document.getElementsByClassName('sunglasses__animation-image')[0],
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: sunglasses,
});

/*
CDN:
https://cdn.jsdelivr.net/npm/micro-slider@1.0.9/dist/micro-slider.min.js
https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js
*/

document.addEventListener('DOMContentLoaded', () => {
  //===== MICRO-SLIDER begin
  const __ms = document.querySelector('.micro-slider');
  const __msSlider = new MicroSlider(__ms, { indicators: true, indicatorText: '' });
  const __hammer = new Hammer(__ms);
  let __msTimer = 3000;
  let __msAutoplay;

  //set autoplay
  __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
  //detect mouseenter event
  __ms.onmouseenter = function(e) {
    clearInterval(__msAutoplay);
    console.log(e.type + ' mouse detected');
  }
  //detect mouseleave event
  __ms.onmouseleave = function(e) {
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    console.log(e.type + ' mouse detected');
  }
  //detect gesture tap event with hammer js library
  hammer.on('tap', function(e) {
    clearInterval(__msAutoplay);
    console.log(e.type + ' gesture detected');
  });
  //detect gesture swipe event with hammer js library
  hammer.on('swipe', function(e) {
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    console.log(e.type + ' gesture detected');
  });
  //===== MICRO-SLIDER end
});

//Variables
const pageviews = document.getElementById('pageviews');
const price = document.getElementById('price');

//Slider background color and dynamic price and pageviews
document.getElementById('main__slider').oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    'linear-gradient(to right, hsl(174, 77%, 80%), hsl(174, 77%, 80%) ' +
    value +
    '%, hsl(224, 65%, 95%) ' +
    value +
    '%, hsl(224, 65%, 95%))';

  if (value >= 0 && value <= 20) {
    price.innerHTML = '$8.00';
    pageviews.innerHTML = '10K PAGEVIEWS';
  } else if (value > 20 && value <= 40) {
    price.innerHTML = '$12.00';
    pageviews.innerHTML = '50K PAGEVIEWS';
  } else if (value > 40 && value <= 60) {
    price.innerHTML = '$16.00';
    pageviews.innerHTML = '100K PAGEVIEWS';
  } else if (value > 60 && value <= 80) {
    price.innerHTML = '$24.00';
    pageviews.innerHTML = '500K PAGEVIEWS';
  } else {
    price.innerHTML = '$36.00';
    pageviews.innerHTML = '1M PAGEVIEWS';
  }
};

//Slider button hover | not working
let image = document.getElementById('main__slider');
image.onmouseover = function () {
  image.src = 'images/icon-slider.svg';
};
image.onmouseout = function () {
  image.src = 'image.png';
};

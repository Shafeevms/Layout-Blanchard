const searchBtn = document.querySelector('.hero__btn');
const input = document.querySelector('.hero__input');

input.addEventListener('focus', function() {
  searchBtn.style.color = '#C283F3';
  input.style.color = '#9D5CD0';
  input.setAttribute('placeholder', '')
});

input.addEventListener('blur', function() {
  searchBtn.style.color = 'white';
  input.style.color = '#ffffff';
  input.setAttribute('placeholder', 'Поиск по сайту')
});

const mySwiper = new Swiper('.hero', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 300,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },

})

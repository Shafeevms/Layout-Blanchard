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

// dropdown
document.addEventListener('click', function(e) {
  document.querySelectorAll('.dropdown').forEach(el => el.classList.remove('dropdown-visible'));
  document.querySelectorAll('.hero__arrow').forEach(el => el.classList.remove('rotate'));
  document.querySelectorAll('.hero__option').forEach(el => el.classList.remove('violet'));
  if (e.target.classList.contains('hero__option')) {
    e.target.closest('.hero__item').querySelector('.dropdown').classList.add('dropdown-visible');
    e.target.closest('.hero__item').querySelector('.hero__arrow').classList.add('rotate');
    e.target.closest('.hero__item').querySelector('.hero__option').classList.add('violet');
  }
  else {
    document.querySelectorAll('.dropdown').forEach(el => el.classList.remove('dropdown-visible'));
    document.querySelectorAll('.hero__arrow').forEach(el => el.classList.remove('rotate'));
    document.querySelectorAll('.hero__option').forEach(el => el.classList.remove('violet'));
  }
})


// simplebar

Array.prototype.forEach.call(
  document.querySelectorAll('.dropdown__list'),
  el => new SimpleBar()
);

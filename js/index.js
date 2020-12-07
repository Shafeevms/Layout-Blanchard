const searchBtn = document.querySelector('.hero__btn');
const input = document.querySelector('.hero__input');

input.addEventListener('focus', function() {
  searchBtn.style.color = '#C283F3';
});

input.addEventListener('blur', function() {
  searchBtn.style.color = 'white';
});

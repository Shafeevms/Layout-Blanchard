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

const heroSwiper = new Swiper('.hero', {
  direction: 'horizontal',
  loop: true,
  speed: 300,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },

})

const gallerySwiper = new Swiper('.gallery__swiper', {
  speed: 1000,
  height: 900,
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },
  // autoplay: {
  //   delay: 1000,
  // },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
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

let items = document.querySelectorAll('.dropdown__list');

items.forEach(el => {
  new SimpleBar(el);
})


// gallery-choise

const element = document.querySelector('.js-choises');
const choices = new Choices(element);

// gallery modal window

const modalAPI = [
  {
    id: 1,
    url: 'Rectangle93.jpg',
    artistName: 'Казимир Малевич',
    stateOfArt: 'Женщина с граблями',
    years: '1931-1932',
    description: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
  },
];

const modalWrong = `
<img src="./img/modal/wrong.png" alt="" class="modal__img">
<article class="modal__article article">
  <h2 class="article__artist reset">Что-то пошло не так...</h2>
  </article>
  <button class="modal__btn"></button>
`


const modalTemplate = (data, wrongTemp) => {
 if (data.length === 0) {
  return wrongTemp;

  } else {
    const [ { url, artistName, stateOfArt, years, description } ] = data;
    return `
    <img src="./img/modal/${url}" alt="${artistName} ${stateOfArt}" class="modal__img">
    <article class="modal__article article">
      <h2 class="article__artist reset">${artistName}</h2>
      <h3 class="article__name reset">“${stateOfArt}”</h3>
      <h4 class="article__years reset">${years}</h4>
      <p class="article__description reset">
      ${description}
      </p>
    </article>
    <button class="modal__btn"></button>

    `;
  }
}
$( "#accordion" ).accordion();

const openModal = e => {
  let centerCoords = {
    top: `${document.documentElement.clientHeight / 2 - 250}px`,
    left: `${document.documentElement.clientWidth / 2 - 450}px`
  }
    if (e.target.classList.contains('gallery__swiper-slide')) {
      const data = [...modalAPI].filter(el => el.id === +e.target.dataset.id);
      render(modalTemplate(data, modalWrong), '.modal');
      document.querySelector('.modal').classList.add('modal-visible');
      document.querySelector('.modal').style.top = centerCoords.top;
      document.querySelector('.modal-visible').style.left = centerCoords.left;
    } else if (e.target.classList.contains('modal__btn')){
      document.querySelector('.modal').classList.remove('modal-visible');
      document.querySelector('.modal').style.top = "-9999px";
    }

}
document.querySelector('.gallery__swiper').addEventListener('click', openModal)


// EVENTS

document.querySelector('.events__button').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelectorAll('.cards__item').forEach(item => item.classList.remove('d-none'));
  this.remove();
})

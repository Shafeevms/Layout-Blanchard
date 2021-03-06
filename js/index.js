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

const gallerySwiperInit = () => {
  const gallerySwiper = new Swiper('.gallery__swiper', {
    speed: 1000,
    height: 900,
    // slidesPerView: 3,
    // slidesPerColumn: 2,
    // slidesPerColumnFill: 'row',
    // slidesPerGroup: 1,
    // spaceBetween: 47,
    navigation: {
      nextEl: '.gallery__swiper-button-next',
      prevEl: '.gallery__swiper-button-prev',
    },
    breakpoints: {
      320: {
        height: 367,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        slidesPerColumnFill: 'row',
      },
      768: {
        height: 400,
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 1,
        spaceBetween: 35,
        slidesPerColumnFill: 'row',
      },
      1400: {
        height: 900,
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 1,
        spaceBetween: 47,
        slidesPerColumnFill: 'row',
      },
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  });
  return gallerySwiper;
}

if (window.matchMedia('(max-width: 767px)').matches) {
  const gallerySwiper = gallerySwiperInit();
  gallerySwiper.removeAllSlides()
  gallerySwiper.appendSlide([
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
    '<div class="swiper-slide gallery__swiper-slide" tabindex="1"><img src="./img/gallery-tablet/Rectangle69-2.jpg" alt="" class="gallery__slider-img"></div>',
   ]);
} else {
  gallerySwiperInit();
}



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
});

const ps = new PerfectScrollbar('.burger__news');

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
  // let centerCoords = {
  //   top: `${document.documentElement.clientHeight / 2 - 250}px`,
  //   left: `${document.documentElement.clientWidth / 2 - 450}px`
  // }
    if (e.target.classList.contains('gallery__swiper-slide')
    || e.target.classList.contains('gallery__slider-img')) {
      const data = [...modalAPI].filter(el => el.id === +e.target.dataset.id);
      render(modalTemplate(data, modalWrong), '.modal');
      document.querySelector('.modal').classList.add('modal-visible');
      // document.querySelector('.modal').style.top = centerCoords.top;
      // document.querySelector('.modal-visible').style.left = centerCoords.left;
    } else if (e.target.classList.contains('modal__btn')){
      document.querySelector('.modal').classList.remove('modal-visible');
      // document.querySelector('.modal').style.top = "-9999px";
    }

}
document.querySelector('.gallery__swiper').addEventListener('click', openModal)


// EVENTS

document.querySelector('.events__button').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelectorAll('.cards__item').forEach(item => {
    item.classList.remove('d-none');
    item.classList.remove('tablet');

  });
  this.remove();
})

// PUBLICATION

const publicationSwiper = new Swiper('.publication__swiper', {
  breakpoints: {
    1400: {
      speed: 1000,
      height: 900,
      direction: 'horizontal',
      slidesPerView: 3,
      // slidesPerColumn: 1,
      slidesPerColumnFill: 'row',
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1024: {
      speed: 1000,
      height: 900,
      direction: 'horizontal',
      slidesPerView: 2,
      // slidesPerColumn: 1,
      slidesPerColumnFill: 'row',
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    768: {
      speed: 1000,
      height: 900,
      direction: 'horizontal',
      slidesPerView: 2,
      // slidesPerColumn: 1,
      slidesPerColumnFill: 'row',
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
  },
  navigation: {
    nextEl: '.publication__swiper-button-next',
    prevEl: '.publication__swiper-button-prev',
  },
  // autoplay: {
  //   delay: 1000,
  // },
  pagination: {
    el: '.publication__swiper-pagination',
    type: 'fraction',
  },
})

// TOOLTIPS

tippy('#tooltip-1', {
  content: "Пример современных тенденций - современная методология разработки",
});

tippy('#tooltip-2', {
  content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
});

tippy('#tooltip-3', {
  content: "В стремлении повысить качество ",
});

const projectSwiper = new Swiper('.projects__swiper', {
 breakpoints: {
   1920: {
    direction: 'horizontal',
    speed: 1000,
    slidesPerView: 3,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 3,
    spaceBetween: 50,
   },
   1024: {
    direction: 'horizontal',
    speed: 1000,
    slidesPerView: 2,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 2,
    spaceBetween: 50,
   },
   768: {
    direction: 'horizontal',
    speed: 1000,
    slidesPerView: 2,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 2,
    spaceBetween: 34,
   },
   320: {
    direction: 'horizontal',
    speed: 1000,
    slidesPerView: 1,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 1,
   }
 },
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },

})

// yandex map

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.619],
    zoom: 13
  });
  var myPlacemark = new ymaps.Placemark([55.7571, 37.6005], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/icons/map-mark.svg',
    iconImageSize: [20, 20],
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('routeEditor');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('routeButtonControl');
  myMap.controls.add('geolocationControl');

  if (window.matchMedia('(max-width: 1024px)').matches) {
    myMap.behaviors.disable('drag');
    myMap.behaviors.disable('scrollZoom');
  }
};

// search header

document.querySelector('.header__top').addEventListener('click', function(e) {
  if (e.target.classList.contains('header__burger')) {
    e.stopPropagation();
  }
  if (e.target.classList.contains('header__btn') || e.target.classList.contains('btn-svg')) {
    e.preventDefault();
    if (document.querySelector('.header').offsetWidth <= 768) {
      document.querySelector('.header__burger').classList.add('d-none');
      document.querySelector('.header__logo-1024').classList.add('d-none');
      document.querySelector('.close__search').classList.remove('d-none');
      document.querySelector('.header__input').classList.remove('d-none');
    };

    if (document.querySelector('.header').offsetWidth > 768) {
      document.querySelector('.header__input').classList.remove('d-none');
    }
  }
  if (e.target.classList.contains('close__search') || e.target.classList.contains('close-svg')) {
    document.querySelector('.header__burger').classList.remove('d-none');
    document.querySelector('.header__logo-1024').classList.remove('d-none');
    document.querySelector('.close__search').classList.add('d-none');
    document.querySelector('.header__input').classList.add('d-none');
  }

});

document.querySelector('.header__burger').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.burger').classList.add('burger__visible');
  document.querySelector('.header__container').classList.add('invisible');
});

document.querySelector('.burger__close').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.burger').classList.remove('burger__visible');
  document.querySelector('.header').classList.remove('invisible');
})

const eventsSwiper = new Swiper('.events__swiper', {
  direction: 'horizontal',
  speed: 1000,
  slidesPerView: 1,
  slidesPerColumnFill: 'row',
  slidesPerGroup: 1,
  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
})

document.querySelector('.category__btn-title').addEventListener('click', function(e) {
  document.querySelectorAll('.category__checkbox').forEach(el => {
    if (!el.checked) {
      el.closest('.category__item').classList.add('d-none');
    }
  })
})


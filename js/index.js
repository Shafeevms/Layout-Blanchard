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

var mySwiper = new Swiper('.hero', {
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

const dropStore = {
  real:
  {
    name: ['Тинторетто', 'Фридрих', 'Леонардо', 'Верроккьо'],
    img: ['d1.jpg', 'd2.jpg', 'd3.jpg', 'd4.jpg']
  },
  impres:
  {
    name: ['Моне', 'Сислей', 'Мане', 'Ренуар'],
    img: ['d5.jpg', 'd6.jpg', 'd7.jpg', 'd8.jpg'],
  },
  postimpres:
  {
    name: ['Ван Гог', 'Сезанн', 'Гоген', 'Сёра'],
    img: ['d9.jpg', 'd10.jpg', 'd11.jpg', 'd12.jpg']
  },
  avangard:
  {
    name: ['Кандинский', 'Маринетти', 'Малевич', 'Пикассо'],
    img: ['d13.jpg', 'd14.jpg', 'd15.jpg', 'd16.jpg']
  },
  futurizm:
  {
    name: ['Карра', 'Прателла', 'Северини', 'Балла'],
    img: ['d17.jpg', 'd18.jpg', 'd19.jpg', 'd20.jpg']
  },
}

const template = items => `
  <div class="dropdown" data-simplebar>
    <ul class="dropdown__list reset">
      ${items}
    </ul>
  </div>`

const dropTemplate = (title) => {
  const names = dropStore[title].name;
  let items = names.reduce((acc, el, index) => {
    return acc += `<li class="dropdown__item d${index + 1}">
                    <a href="#" class="dropdown__link">${el}</a>
                  </li>`;
  }, '')
  return template(items);
}

document.addEventListener('click', function(e) {
  document.querySelectorAll('.dropdown__await').forEach(el => el.innerHTML ='');

  if (e.target.classList.contains('hero__option')) {
    const parent = e.target.parentNode;
    parent.querySelector('.dropdown__await').innerHTML = dropTemplate(parent.dataset.name)
  } else {
    document.querySelectorAll('.dropdown__await').forEach(el => el.innerHTML ='');
  }
});

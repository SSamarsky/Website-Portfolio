const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'email': 'E-mail',
      'phone': 'Phone',
      'contact-message': 'Message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'email': 'Электронная почта',
      'phone': 'Телефон',
      'contact-message': 'Сообщение'
    }
}

//   Switch Language
const languageEn = document.querySelector('.en');
const languageRu = document.querySelector('.ru');
const dataAttributes = document.querySelectorAll('[data-i18]');

function getTranslate(lang) {
    dataAttributes.forEach((element) => {
        if (element.placeholder) {
            element.placeholder = i18Obj[lang][element.dataset.i18];
        }
        element.textContent = i18Obj[lang][element.dataset.i18];
    });
}

languageEn.addEventListener('click', () => getTranslate('en'));
languageRu.addEventListener('click', () => getTranslate('ru'));

// Burger-menu
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
const main = document.querySelector('.main');
const logo = document.querySelector('.logo');

const navLinks = document.querySelectorAll('.nav-link');

function toggleMenu() {
    burger.classList.toggle('open');
    navMenu.classList.toggle('open');
    main.classList.toggle('open');
    logo.classList.toggle('open');
}

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        burger.classList.remove('open');
        navMenu.classList.remove('open');
        main.classList.remove('open');
        logo.classList.remove('open');
    }
}

burger.addEventListener('click', toggleMenu);
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

// Change Images
const portfolioBtns = document.querySelector('.btns');
const portfolioImages = document.querySelectorAll('.portfolio-photo');

function changeImage(event) {
    if (event.target.classList.contains('portfolio-btn')) {
        portfolioImages.forEach((img, index) => {
            img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`;
        });
    }
}

portfolioBtns.addEventListener('click', changeImage);

// Image caching
const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
    seasons.forEach((season, index) => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${seasons[index]}/${i}.jpg`;
          }
    });
  }

  preloadImages();
  

// Active buttons
const switchLanguageActive = document.querySelectorAll('.switch-link');
const portfolioBtnsActive = document.querySelectorAll('.portfolio-btn');

function changeClassActiveLangues(event) {
    switchLanguageActive.forEach((btn) => {
        btn.classList.remove('active');
    });
    event.target.classList.toggle('active');
    
}

function changeClassActiveBtns(event) {
    portfolioBtnsActive.forEach((btn) => {
        btn.classList.remove('active');
    });
    event.target.classList.toggle('active');
}

switchLanguageActive.forEach((el) => el.addEventListener('click', changeClassActiveLangues));
portfolioBtnsActive.forEach((el) => el.addEventListener('click', changeClassActiveBtns));

// Change Theme
const switchTheme = document.querySelector('.theme');
const arrayClassSwitchThem = document.querySelectorAll(['.body', '.logo', '.nav', '.nav-link', '.switch-link', '.intro', '.btn', '.section-title', '.section-title__inner', '.portfolio-btn', '.contanct', '.contact-title', '.input']);

function changeClassTheme() {
    switchTheme.classList.toggle('light-theme');
    arrayClassSwitchThem.forEach((currentClass) => {
        currentClass.classList.toggle('light-theme');
    });
}

switchTheme.addEventListener('click', changeClassTheme);


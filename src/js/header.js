 const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__list');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
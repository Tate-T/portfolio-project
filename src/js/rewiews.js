

const rewiewsList = document.querySelector('.rewiews__list');
const showSliderBtn = document.querySelector('.rewiews__button'); // кнопка вперед
const backBtn = document.querySelector('.rewiews__button--prev'); // кнопка назад

let allReviews = []; 

async function loadReviews() {
  try {
    const response = await fetch('https://68bdb06e227c48698f8525a8.mockapi.io/portfolio/comments');
    if (!response.ok) throw new Error('Failed to fetch');

    allReviews = await response.json();
    renderInitialReviews();
  } catch (error) {
    console.error('Error loading reviews:', error);
    rewiewsList.innerHTML = '<li class="rewiews__item">Not found</li>';
  }
}

function renderInitialReviews() {
  rewiewsList.classList.remove('slider');
  rewiewsList.innerHTML = '';

  allReviews.slice(0, 2).forEach(review => {
    const li = document.createElement('li');
    li.classList.add('rewiews__item');
    li.innerHTML = `
      <p class="rewiews__text">${review.comment}</p>
      <div class="rewiews__box">
        <img class="rewiews__img" src="${review.avatar}" alt="${review.name}">
        <p class="rewiews__name">${review.name}</p>
      </div>
    `;
    rewiewsList.appendChild(li);
  });

  showSliderBtn.style.display = 'block';
  backBtn.style.display = 'none';
}

function renderSliderReviews() {
  rewiewsList.classList.add('slider');
  rewiewsList.innerHTML = '';

  allReviews.forEach(review => {
    const li = document.createElement('li');
    li.classList.add('rewiews__item');
    li.innerHTML = `
      <p class="rewiews__text">${review.comment}</p>
      <div class="rewiews__box">
        <img class="rewiews__img" src="${review.avatar}" alt="${review.name}">
        <p class="rewiews__name">${review.name}</p>
      </div>
    `;
    rewiewsList.appendChild(li);
  });

  showSliderBtn.style.display = 'none';
  backBtn.style.display = 'block';
}

showSliderBtn.addEventListener('click', renderSliderReviews);
backBtn.addEventListener('click', renderInitialReviews);

document.addEventListener('DOMContentLoaded', loadReviews);



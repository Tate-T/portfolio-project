// const list = document.querySelector(".rewiews__list")
// const button = document.querySelector("rewiews__button")
// export function displayProjects(projects) {
//     console.log(projects)
//     const projectsHtml = projects.map(project => {
//         const html = `
//          <li class="projects__project-item">
//      <img src="${project.image}" alt="Project Photo" class="project__photo">
//      <p class="project__programming-language">${project.languages}</p>
//      <div class="project-data">
//  <p class="project__name">${project.name}</p>
//      <a class="visit__link" target="__blank" href="${project.link}"><button type="button" class="project__visit-button">Visit<svg class="project__arrow"><use href="#icon-arrow-up"></use></svg></button></a>
//      </div>
//  </li>
//         `

//         return html
//     }).join(``)
//     list.insertAdjacentHTML("beforeend", projectsHtml)
//     button.classList.remove("none")
// }

// export const getProjects = async (page, perPage) => {
//     try {
//         return await fetch(`https://68bdb06e227c48698f8525a8.mockapi.io/portfolio/projects?page=${page}&limit=${perPage}`)
//     } catch (error) {
//         return error
//     }
// }

// export const getRewiews = async (page, perPage) => {
//     try {
//         return await fetch(`https://68bdb06e227c48698f8525a8.mockapi.io/portfolio/comments`)
//     } catch (error) {
//         return error
//     }
// }


//   async function loadReviews() {
//     try {
//       const response = await fetch('https://68bdb06e227c48698f8525a8.mockapi.io/portfolio/comments');
//       if (!response.ok) throw new Error('Failed to fetch');

//       const data = await response.json();
//       const list = document.querySelector('.rewiews__list');
//       list.innerHTML = ''; // Очистити попередній вміст

//       data.forEach(review => {
//         const li = document.createElement('li');
//         li.classList.add('rewiews__item');
//         li.innerHTML = `
//           <p class="rewiews__text">${review.comment}</p>
//           <div class="rewiews__box">
//             <img class="rewiews__img" src="${review.avatar}" alt="${review.name}">
//             <p class="rewiews__name">${review.name}</p>
//           </div>
//         `;
//         list.appendChild(li);
//       });
//     } catch (error) {
//       console.error('Error loading reviews:', error);
//       document.querySelector('.rewiews__list').innerHTML = '<li class="rewiews__item">Not found</li>';
//     }
//   }

//   // Викликаємо при завантаженні сторінки
//   document.addEventListener('DOMContentLoaded', loadReviews);


const rewiewsList = document.querySelector('.rewiews__list');
const showSliderBtn = document.querySelector('.rewiews__button'); // кнопка вперед
const backBtn = document.querySelector('.rewiews__button--prev'); // кнопка назад

let allReviews = []; // зберігаємо всі відгуки

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



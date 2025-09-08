import { getProjects, displayProjects } from "./js/projects.js";
const thelist = document.querySelector(".projects__project-list")
const button = document.querySelector(".load-more-projects")
let page = 1;
let perPage = 3;

getProjects(page, perPage).then(data => data.json()).then(resultdata => displayProjects(resultdata));

button.addEventListener("click", (event) => {
    page++
    getProjects(page, perPage).then(data => data.json()).then(resultdata => displayProjects(resultdata));
})


document.querySelectorAll('.faq__text-info').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement.parentElement;
    const answer = item.querySelector('.faq__answer');
    const arrow = item.querySelector('.faq__arrow');

    document.querySelectorAll('.faq__quetions-item').forEach(element => {
      if (element !== item) {
        element.querySelector('.faq__answer').classList.remove('open');
        element.querySelector('.faq__arrow').classList.remove('up');
        element.classList.remove('green-background');
      }
    });

    answer.classList.toggle('open');
    arrow.classList.toggle('up');
    item.classList.toggle('green-background');
  });
});

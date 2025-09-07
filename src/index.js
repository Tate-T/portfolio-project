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
const list = document.querySelector(".projects__project-list")
const button = document.querySelector(".load-more-projects")
export function displayProjects(projects) {
    const projectsHtml = projects.map(project => {
        const html = `
         <li class="projects__project-item">
     <img src="${project.image}" alt="Project Photo" class="project__photo">
     <p class="project__programming-language">${project.languages}</p>
     <div class="project-data">
 <p class="project__name">${project.name}</p>
     <a class="visit__link" target="__blank" href="${project.link}"><button type="button" class="project__visit-button">Visit<svg class="project__arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M1.75 16.25L16.25 1.75M16.25 1.75H2.75M16.25 1.75V15.25" stroke="#00B068" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button></a>
     </div>
 </li>
        `

        return html
    }).join(``)
    list.insertAdjacentHTML("beforeend", projectsHtml)
    button.classList.remove("none")
}

export const getProjects = async (page, perPage) => {
    try {
        return await fetch(`https://68bdb06e227c48698f8525a8.mockapi.io/portfolio/projects?page=${page}&limit=${perPage}`)
    } catch (error) {
        return error
    }
}
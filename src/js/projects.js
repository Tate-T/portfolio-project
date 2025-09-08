const list = document.querySelector(".projects__project-list")
const button = document.querySelector(".load-more-projects")
export function displayProjects(projects) {
    console.log(projects)
    const projectsHtml = projects.map(project => {
        const html = `
         <li class="projects__project-item">
     <img src="${project.image}" alt="Project Photo" class="project__photo">
     <p class="project__programming-language">${project.languages}</p>
     <div class="project-data">
 <p class="project__name">${project.name}</p>
     <a class="visit__link" target="__blank" href="${project.link}"><button type="button" class="project__visit-button">Visit<svg class="project__arrow"><use href="#icon-arrow-up"></use></svg></button></a>
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
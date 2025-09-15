const e=document.querySelector(".projects__project-list"),t=document.querySelector(".load-more-projects");function o(o){let r=o.map(e=>`
         <li class="projects__project-item">
     <img src="${e.image}" alt="Project Photo" class="project__photo">
     <p class="project__programming-language">${e.languages}</p>
     <div class="project-data">
 <p class="project__name">${e.name}</p>
     <a class="visit__link" target="__blank" href="${e.link}"><button type="button" class="project__visit-button">Visit<svg class="project__arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M1.75 16.25L16.25 1.75M16.25 1.75H2.75M16.25 1.75V15.25" stroke="#00B068" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button></a>
     </div>
 </li>
        `).join("");e.insertAdjacentHTML("beforeend",r),t.classList.remove("none")}const r=async(e,t)=>{try{return await fetch(`https://68bdb06e227c48698f8525a8.mockapi.io/portfolio/projects?page=${e}&limit=${t}`)}catch(e){return e}};document.querySelector(".projects__project-list");const s=document.querySelector(".load-more-projects");let c=1;r(1,3).then(e=>e.json()).then(e=>o(e)),s.addEventListener("click",e=>{r(++c,3).then(e=>e.json()).then(e=>o(e))}),document.querySelectorAll(".faq__text-info").forEach(e=>{e.addEventListener("click",()=>{let t=e.parentElement.parentElement,o=t.querySelector(".faq__answer"),r=t.querySelector(".faq__arrow");document.querySelectorAll(".faq__quetions-item").forEach(e=>{e!==t&&(e.querySelector(".faq__answer").classList.remove("open"),e.querySelector(".faq__arrow").classList.remove("up"),e.classList.remove("green-background"))}),o.classList.toggle("open"),r.classList.toggle("up"),t.classList.toggle("green-background")})});
//# sourceMappingURL=portfolio-project.bba74866.js.map

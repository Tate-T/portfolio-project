const e=document.querySelector(".addrewiews__form"),t=document.getElementById("cooperationModal"),r=document.querySelector(".modal__close"),o=document.querySelector(".modal__overlay");e.addEventListener("submit",function(e){e.preventDefault(),t.classList.add("active")}),r.addEventListener("click",()=>{t.classList.remove("active")}),o.addEventListener("click",()=>{t.classList.remove("active")});const s=document.querySelector(".header__burger"),c=document.querySelector(".header__list");s.addEventListener("click",()=>{c.classList.toggle("active")});const n=document.querySelector(".rewiews__list"),a=document.querySelector(".rewiews__button"),i=document.querySelector(".rewiews__button--prev");let l=[];async function d(){try{let e=await fetch("https://68bdb06e227c48698f8525a8.mockapi.io/portfolio/comments");if(!e.ok)throw Error("Failed to fetch");l=await e.json(),_()}catch(e){console.error("Error loading reviews:",e),n.innerHTML='<li class="rewiews__item">Not found</li>'}}function _(){n.classList.remove("slider"),n.innerHTML="",l.slice(0,2).forEach(e=>{let t=document.createElement("li");t.classList.add("rewiews__item"),t.innerHTML=`
      <p class="rewiews__text">${e.comment}</p>
      <div class="rewiews__box">
        <img class="rewiews__img" src="${e.avatar}" alt="${e.name}">
        <p class="rewiews__name">${e.name}</p>
      </div>
    `,n.appendChild(t)}),a.style.display="block",i.style.display="none"}a.addEventListener("click",function(){n.classList.add("slider"),n.innerHTML="",l.forEach(e=>{let t=document.createElement("li");t.classList.add("rewiews__item"),t.innerHTML=`
      <p class="rewiews__text">${e.comment}</p>
      <div class="rewiews__box">
        <img class="rewiews__img" src="${e.avatar}" alt="${e.name}">
        <p class="rewiews__name">${e.name}</p>
      </div>
    `,n.appendChild(t)}),a.style.display="none",i.style.display="block"}),i.addEventListener("click",_),document.addEventListener("DOMContentLoaded",d);const m=document.querySelector(".projects__project-list"),u=document.querySelector(".load-more-projects");function p(e){let t=e.map(e=>`
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
        `).join("");m.insertAdjacentHTML("beforeend",t),u.classList.remove("none")}const w=async(e,t)=>{try{return await fetch(`https://68bdb06e227c48698f8525a8.mockapi.io/portfolio/projects?page=${e}&limit=${t}`)}catch(e){return e}};document.querySelector(".projects__project-list");const v=document.querySelector(".load-more-projects");let g=1;w(1,3).then(e=>e.json()).then(e=>p(e)),v.addEventListener("click",e=>{w(++g,3).then(e=>e.json()).then(e=>p(e))}),document.querySelectorAll(".faq__text-info").forEach(e=>{e.addEventListener("click",()=>{let t=e.parentElement.parentElement,r=t.querySelector(".faq__answer"),o=t.querySelector(".faq__arrow");document.querySelectorAll(".faq__quetions-item").forEach(e=>{e!==t&&(e.querySelector(".faq__answer").classList.remove("open"),e.querySelector(".faq__arrow").classList.remove("up"),e.classList.remove("green-background"))}),r.classList.toggle("open"),o.classList.toggle("up"),t.classList.toggle("green-background")})});
//# sourceMappingURL=portfolio-project.b4a2630f.js.map

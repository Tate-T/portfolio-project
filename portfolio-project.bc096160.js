const e=document.querySelector(".rewiews__list"),s=document.querySelector(".rewiews__button"),t=document.querySelector(".rewiews__button--prev");let i=[];async function r(){try{let e=await fetch("https://68bdb06e227c48698f8525a8.mockapi.io/portfolio/comments");if(!e.ok)throw Error("Failed to fetch");i=await e.json(),n()}catch(s){console.error("Error loading reviews:",s),e.innerHTML='<li class="rewiews__item">Not found</li>'}}function n(){e.classList.remove("slider"),e.innerHTML="",i.slice(0,2).forEach(s=>{let t=document.createElement("li");t.classList.add("rewiews__item"),t.innerHTML=`
      <p class="rewiews__text">${s.comment}</p>
      <div class="rewiews__box">
        <img class="rewiews__img" src="${s.avatar}" alt="${s.name}">
        <p class="rewiews__name">${s.name}</p>
      </div>
    `,e.appendChild(t)}),s.style.display="block",t.style.display="none"}s.addEventListener("click",function(){e.classList.add("slider"),e.innerHTML="",i.forEach(s=>{let t=document.createElement("li");t.classList.add("rewiews__item"),t.innerHTML=`
      <p class="rewiews__text">${s.comment}</p>
      <div class="rewiews__box">
        <img class="rewiews__img" src="${s.avatar}" alt="${s.name}">
        <p class="rewiews__name">${s.name}</p>
      </div>
    `,e.appendChild(t)}),s.style.display="none",t.style.display="block"}),t.addEventListener("click",n),document.addEventListener("DOMContentLoaded",r);
//# sourceMappingURL=portfolio-project.bc096160.js.map

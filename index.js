import{a as p,S as g,i as a}from"./assets/vendor-D44NKBjN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="54691117-5b4d92f66c6b88b25131877c0",h="https://pixabay.com/api/";function b(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(h,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let f;f=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:d,downloads:m})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${n}">
      <img 
      class="gallery-image"
      src="${o}"
      alt="${e}"
      />
    </a>
    <div class="info">
    <p class="info-item">
    <b>Likes</b>
    ${t}
    </p>
    <p class="info-item">
    <b>Views</b>
    ${s}
    </p>
    <p class="info-item">
    <b>Comments</b>
    ${d}
    </p>
    <p class="info-item">
    <b>Downloads</b>
    ${m}
    </p>
    </div>
    </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),f.refresh()}function q(){c.innerHTML=""}function S(){u.classList.remove("is-hidden")}function v(){u.classList.add("is-hidden")}const l=document.querySelector(".form"),w=document.querySelector("input");l.addEventListener("submit",i=>{i.preventDefault();const r=w.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}q(),S(),b(r).then(o=>{if(o.hits.length===0){a.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}L(o.hits)}).catch(o=>{console.error(o),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{v(),l.reset()})});
//# sourceMappingURL=index.js.map

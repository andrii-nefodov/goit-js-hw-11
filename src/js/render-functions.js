import SimpleLightbox from "simplelightbox";

const galleryContainer = document.querySelector(".gallery");
const loader = document.querySelector('.loader');
let galleryLightbox;

galleryLightbox = new SimpleLightbox(".gallery a", { 
    captionsData: "alt",
    captionDelay: 250
 });

 export function createGallery(images) {
    
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img 
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      />
    </a>
    <div class="info">
    <p class="info-item">
    <b>Likes</b>
    ${likes}
    </p>
    <p class="info-item">
    <b>Views</b>
    ${views}
    </p>
    <p class="info-item">
    <b>Comments</b>
    ${comments}
    </p>
    <p class="info-item">
    <b>Downloads</b>
    ${downloads}
    </p>
    </div>
    </li>
    `
 ).join("");
 galleryContainer.insertAdjacentHTML('beforeend', markup);
 galleryLightbox.refresh();
 }

 export function clearGallery() {
    galleryContainer.innerHTML = "";
 }

 export function showLoader() {
    loader.classList.remove('is-hidden');
 }

 export function hideLoader() {
  loader.classList.add('is-hidden');
}
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryPlace = document.querySelector('.gallery');
galleryPlace.insertAdjacentHTML('beforeend', makeGalleryMarkup(galleryItems));
galleryPlace.addEventListener('click', getOriginalImgOnClick);

function makeGalleryMarkup(gallery) {
  return gallery.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>`
    }).join('');
};

function getOriginalImgOnClick(e) {
  e.preventDefault();
  const currentImg = e.target.classList.contains('gallery__image');
  const originalImg = e.target.dataset.source;

  if(!currentImg) {
    return;
  }

  openModalWindowGallery(originalImg);
}

function openModalWindowGallery(source) {
  let gallery = new SimpleLightbox('.gallery a', { scrollZoom: false});
  gallery.on('show.simplelightbox', () => {
      `<div class="modal">
         <img  src="${source}" width="1280" height="800" />
      </div>`
  });
};

console.log(galleryItems);

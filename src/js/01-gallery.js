// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryPlace = document.querySelector('.gallery');
galleryPlace.insertAdjacentHTML('beforeend', makeGalleryMarkup(galleryItems));

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

  let gallery = new SimpleLightbox('.gallery a', { scrollZoom: false});
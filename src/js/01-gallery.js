// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsGalleryMarkup = createcardsGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsGalleryMarkup)

function createcardsGalleryMarkup(galleryItems) {
      return galleryItems
            .map(({ description, original, preview }) => {
                  return `<div>
                              <a class="gallery__item" href="${original}">
                              <img class="gallery__image" src="${preview}" alt="${description}" />
                              </a>
                        </div>`
            }).join('');
};

let gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom', 
      captionDelay:250,
      enableKeyboard: true,
  
});;
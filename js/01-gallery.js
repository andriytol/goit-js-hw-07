import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createGallery = () => galleryItems.map((item) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}">
        </a>
    </div>`).join('');

const onGallery = (event) => {
    event.preventDefault();
    if(event.target.classList.value !== 'gallery__image') {
        return;
    }
    basicLightbox.create(`
    <img src="${event.target.dataset.source}">`).show();
};

gallery.innerHTML = createGallery();

gallery.addEventListener('click', onGallery);
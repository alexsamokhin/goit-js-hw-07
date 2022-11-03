import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryMarkup = createMarkup(galleryItems);
gallery.innerHTML = galleryMarkup;
gallery.addEventListener('click', onImgClick);

function createMarkup(gallery) {
    return gallery.map(item => {
        return  `<div class ="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"/>
        </a>
        </div>`
    }).join("");
}

let instance;
function onImgClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") { return };
    instance = basicLightbox.create(
    `<img src=${evt.target.dataset.source}>`
    );
    instance.show();

    document.addEventListener('keydown', closeOnEscape); 
}
    
function closeOnEscape (evt) {
    if (evt.code === "Escape") {
        instance.close();
        document.removeEventListener("keydown", closeOnEscape);
    }
}
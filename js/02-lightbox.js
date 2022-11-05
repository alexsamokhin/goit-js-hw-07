import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const markUpGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt=${description}/>
    </a>`;
  })
  .join("");

gallery.innerHTML = markUpGallery;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
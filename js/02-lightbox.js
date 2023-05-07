import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// --------1-Render markup----
const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
   </a>
</li>`
  )
  .join("");

galleryList.innerHTML = markup;

// ------3,4-Library initialization, set image caption display---------
const lightbox = new SimpleLightbox(".gallery__item a", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});

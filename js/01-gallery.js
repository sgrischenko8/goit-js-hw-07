import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// -----1-Render markup-----------
const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`
  )
  .join("");

galleryList.innerHTML = markup;

// -------2--Implementing delegation--------
galleryList.addEventListener("click", (openModalView) => {
  if (openModalView.currentTarget === openModalView.target) {
    return;
  }

  openModalView.preventDefault();
  console.log(openModalView.target.src);

  // ---------4,5-Opening a modal, replacing the value of the src-------
  const instance = basicLightbox.create(
    `<img width="1280" src="${openModalView.target.dataset.source}">`,
    {
      onClose: () => {
        window.removeEventListener("keydown", closeByEsc);
      },
    }
  );
  instance.show();
  window.addEventListener("keydown", closeByEsc);

  function closeByEsc({ code }) {
    if (code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", closeByEsc);
    }
  }
});

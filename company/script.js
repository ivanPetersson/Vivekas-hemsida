

const images = document.querySelectorAll(".images img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImage");
const modalText = document.querySelector(".modalText");
const close = document.querySelector(".close");

images.forEach((image) => {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modalText.innerHTML = image.alt;
        modal.classList.add("appear");

        close.addEventListener("click", () => {
        modal.classList.remove("appear");
        });
    });
});
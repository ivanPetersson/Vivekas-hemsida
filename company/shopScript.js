const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;

const size = carouselImages[0].clientWidth;

carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length -1 ) return;
    carousel.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carousel.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
//add a eventlisterner to carousel
carousel.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone'){
        carousel.style.transition = 'none';
        counter = carouselImages.length - 2;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carousel.style.transition = 'none';
        counter = carouselImages.length - counter;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    
    
});
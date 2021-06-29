const autoslides = document.querySelectorAll(".autoscroll__slider_image");

let ind = 0;

const activeSlide1 = q => {
    for(autoscroll__slider_image of autoslides) {
        autoscroll__slider_image.classList.remove('active');
    }
    autoslides[q].classList.add('active')
}

const nextSlide1 = () => {
    if(ind === autoslides.length - 1) {
        ind = 0;
        activeSlide1(ind);
    } else {
        ind++;
        activeSlide1(ind);
    }
}

setInterval(nextSlide1, 2500);
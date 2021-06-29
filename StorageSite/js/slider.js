const prev = document.getElementById("Btn-prev"),
      next = document.getElementById("Btn-next"),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll(".dot");

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active')
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active')
}

const currentSlide = a => {
    activeSlide(a);
    activeDot(a);
}

const nextSlide = () => {
    if(index === slides.length - 1) {
        index = 0;
        currentSlide(index);
    } else {
        index++;
        currentSlide(index);
    }
}
const prevSlide = () => {
    if(index == 0) {
        index = slides.length-1;
        currentSlide(index);
    } else {
        index--;
        currentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        currentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
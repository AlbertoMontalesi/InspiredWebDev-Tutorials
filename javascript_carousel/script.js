document.addEventListener("DOMContentLoaded", () => {

    // grab all the slides 
    let slides = document.querySelectorAll("#slider .slide");
    // set initial slide
    let currentSlide = 0;
    //grab both buttons
    const nextButton = document.querySelector(".button-right");
    const prevButton = document.querySelector(".button-left");


    function nextSlide() {
        // current slide becomes hidden
        slides[currentSlide].className = 'slide';
        // set the current slide as the next one
        currentSlide = (currentSlide + 1) % slides.length;
        // add the class showing to the slide to make it visible
        slides[currentSlide].className = 'slide showing';
    }

    function prevSlide() {
        // current slide becomes hidden
        slides[currentSlide].className = 'slide';
        // set the current slide as the previous one
        currentSlide = (currentSlide - 1) % slides.length;

        if (currentSlide == -1) {
            currentSlide = slides.length - 1;
        }
        // add the class showing to the slide to make it visible
        slides[currentSlide].className = 'slide showing';
    }

    nextButton.addEventListener("click", () => {
        // go to next slide on click of the button
        nextSlide();
    });
    prevButton.addEventListener("click", () => {
        // go to previous slide on click of the button
        prevSlide();
    });


    /* VERTICALLY ALIGN THE BUTTONS IN THE MIDDLE OF THE SLIDER TEXT
     */
    function positionSliderButton() {
        // grab the slider
        let slider = document.querySelector('.slide-text');
        // grab its height
        let sliderHeight = slider.getBoundingClientRect().height;
        // grab the button
        let buttons = document.querySelectorAll('.slider-button');

        // for each of the buttons
        for (button of buttons) {
            // get their height
            let buttonHeight = button.getBoundingClientRect().height;
            // position them right in the middle of the text,
            button.style.top = (((sliderHeight - buttonHeight) / 2).toString()) + "px";
        }
    }
    positionSliderButton();

    // whenever the window is resize, reposition the buttons
    window.addEventListener('resize', () => {
        positionSliderButton();
    });

});
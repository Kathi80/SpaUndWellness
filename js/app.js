
document.addEventListener("DOMContentLoaded", function() {
    
    // nested menu
    const nestedMenu = document.querySelectorAll(".nested-menu");
    const menuTriggerEl = document.querySelectorAll(".menu-trigger-el");

    menuTriggerEl.forEach((element,key) => {
        element.addEventListener("mouseover", function() {
            nestedMenu[key].style.display = "block";
         });
    });

    nestedMenu.forEach(element => {
        element.addEventListener("mouseout", function() {
            this.style.display = "none";
        });
    });
    
    // read more-less
    const readMoreLessBtns = document.querySelectorAll(".read-more-less-btn");
    
    function showHideText() {
        const siblingText = this.previousElementSibling;

        if (siblingText.style.display === "none" || siblingText.style.display === "") {
            siblingText.style.display = "block";
            this.textContent = "read less";
        } else {
            siblingText.style.display = "none";
            this.textContent = "read more";
        }
    }

    for (let i = 0; i < readMoreLessBtns.length; i++) {
        readMoreLessBtns[i].addEventListener("click", showHideText);
    }
    
    // newsletter
    const input = document.querySelector(".newsletter-form input");
    const newsletterBtn = document.querySelector(".newsletter-form button");
    const formInfo = document.querySelector(".form-info");

    newsletterBtn.addEventListener("click", function(event) {
        event.preventDefault();
        formInfo.style.display = "block";

        if (input.value !== "") {
            formInfo.textContent = "Thank you for subscribing to our newsletter";
            input.value = "";
        } else {
            formInfo.textContent = "Please enter your email address";
        }
    });
    
    // slider
    const slider = document.querySelector(".slider");
    const sliderStage = document.querySelector(".slider-stage");
    const slides = document.querySelectorAll(".slider li");
    const prev = document.querySelector(".previous-arrow");
    const next = document.querySelector(".next-arrow");

    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
    let slidesNumber = slides.length - 1;

    function goToSlide(index) {
        
        if (index < 0) {
            index = slidesNumber;
        } else if (index > slidesNumber) {
            index = 0;
        }

        slider.style.left = index * (-slideWidth) + "px";
        currentIndex = index;
    }

    function slideToNext() {
        goToSlide(currentIndex + 1);
    }

    function slideToPrev() {
        goToSlide(currentIndex - 1);
    }

    prev.addEventListener("click", slideToPrev);
    next.addEventListener("click", slideToNext);
    setInterval(slideToNext, 4000);

    // go-up button

    const goUpBtn = document.querySelector(".go-up i");

    goUpBtn.addEventListener("click", function() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });  
        
});
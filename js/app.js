
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
    

    
    
});
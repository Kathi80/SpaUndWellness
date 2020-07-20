
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
    
  
    

    
    
});
function activateBurgerMenu () {
     
     const menu = document.querySelector(".header__nav ");
     const burgerItem = document.querySelector(".burger");

     const menuClose = document.querySelector(".nav__close"); 

     burgerItem.addEventListener("click", ()=> {
        menu.classList.toggle("header__nav_active");
        burgerItem.classList.toggle("burger__close");
    }); 
    menuClose.addEventListener("click", ()=> {
        menu.classList.remove("header__nav_active");
    });
}
activateBurgerMenu ();

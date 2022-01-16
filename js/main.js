const mobileMenu = document.getElementById('nav-items');
const bars = document.getElementById('mobile-menu');
let toggleMenu = true;

toggleMenu = () => {
  if(window.innerWidth < 700){
    if(mobileMenu.style.display == "flex") mobileMenu.style = "display: none;";
    else mobileMenu.style = "display: flex;";
    toggleMenu = !toggleMenu;
  }
}

bars.addEventListener('click', toggleMenu);
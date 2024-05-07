const menuBtn = document.getElementById("menu-btn");
const menuContent = document.getElementById("menu-content");
const body = document.querySelector('body');
const favButton = document.querySelectorAll('.heart')

window.onload=function() {
  menuBtn.addEventListener("click", openMenu);
}

function openMenu() {
  menuBtn.classList.toggle('active')
  menuContent.classList.toggle('menuOpen')
  body.classList.toggle('maxHeight')
}

for (let i = 0; i < favButton.length; i++) {
  // Voeg een event listener toe aan elke knop
  favButton[i].addEventListener('click', function() {
      // Toggle de class bij het klikken op de knop
      this.classList.toggle('heart-favorite');
  });
}

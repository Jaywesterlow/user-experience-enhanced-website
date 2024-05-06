const menuBtn = document.getElementById("menu-btn");
const menuContent = document.getElementById("menu-content");
const body = document.querySelector('body');

window.onload=function(){
  menuBtn.addEventListener("click", openMenu);
}

function openMenu(){
  menuBtn.classList.toggle('active')
  menuContent.classList.toggle('menuOpen')
  body.classList.toggle('maxHeight')
}
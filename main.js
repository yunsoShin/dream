'use strict'

//make navbar transition when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  console.log(window.scrollY);
  console.log(`heigth: ${navbarHeight}`);
  if(window.scrollY > navbarHeight)
  {
    navbar.classList.add('navbar--dark')
  }
  else{
    navbar.classList.remove('navbar--dark')
  }
})
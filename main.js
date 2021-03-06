'use strict'

//make navbar transition when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{

  if(window.scrollY > navbarHeight)
  {
    navbar.classList.add('navbar--dark')
  }
  else{
    navbar.classList.remove('navbar--dark')
  }
})
//Handle scrolling when trapping on the navbar
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event)=>{
  
  const target = event.target;
  const link = target.dataset.link;
  if(link==null){
    return;
  }
  navbarMenu.classList.remove('open');
  console.log(event.target.dataset.link);
  scrollIntoView(link);
});

const ContactMe =document.querySelector('.home__container');
ContactMe.addEventListener('click',()=>{
  scrollIntoView('#Contact');
});


//transparent as the window scroll down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});










function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}


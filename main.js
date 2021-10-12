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

  console.log(event.target.dataset.link);
  scrollIntoView(link);
});

const ContactMe =document.querySelector('.home__container');
ContactMe.addEventListener('click',()=>{
  scrollIntoView('#Contact');
});


//transparent as the window scroll down
const home = document.querySelector('#home')
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  console.log(window.scrollY);
  console.log(`heigth: ${homeheight}`);
  console.log(1-window.scrollY/homeheight);
  
    home.style.opacity = 1-window.scrollY/homeheight;
}












function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}



const navSlide = () => {
 const burger = document.querySelector('.burger');
 const nav = document.querySelector('.nav-items');
 const navLinks = document.querySelectorAll('.nav-link');
// Toggle Nav
 burger.addEventListener('click',()=>{
  nav.classList.toggle('nav-active');
   // Animate links
  navLinks.forEach((link,index) => {
   if(link.style.animation){
    link.style.animation = '';
   }
   else{
    
    link.style.animation = 'navLinkFade 0.5s ease forwards 0.5s 1';
    
   }   
});
// Burger Animation
 burger.classList.toggle('toggle');
 });

 
}
navSlide();
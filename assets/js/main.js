window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


const navToggle = document.getElementById('menu-toggle'),
        navMenu = document.getElementById('nav-menu'),
        navClose = document.getElementById('menu-close')
        
    

   if(navToggle){
       navToggle.addEventListener('click', function() {
       navMenu.classList.toggle('show-menu')
       navToggle.classList.toggle('menu-close')
        })
    }
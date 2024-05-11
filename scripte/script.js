let activemenu = document.querySelectorAll('.menu__link')
let focusiput = document.querySelector('.form__input')
let shadowbox = document.querySelector('.form-box')
let menu = document.querySelector('.menue-bar')
let menutggel = document.querySelector('.menu-mobail')
let navmenu = document.querySelector('.menu-bar__line')
activemenu.forEach(function(item){

item.addEventListener('click',function(){


    document.querySelector('.menue__link--active').classList.remove('menue__link--active')


    this.classList.add('menue__link--active')
})

})
focusiput.addEventListener('focus',function(){
    
    shadowbox.style.boxShadow = "0 0 5rem rgba(231,111,81,.4)";

})
focusiput.addEventListener('blur',function(){
    
    shadowbox.style.boxShadow = "none";

})
menu.addEventListener('click',function(){

    menutggel.classList.toggle('menu-mobail--open')

    navmenu.classList.toggle('menu-bar--transform')


})
document.addEventListener('scroll',function(){
    
    
    if(menutggel.className = 'menu-mobail menu-mobail--open'){

        menutggel.style.opacity = '0'

        navmenu.classList.remove('menu-bar--transform')
       
    }
    if(menutggel.className = 'menu-mobail'){

        menutggel.style.opacity = '1'
    }





})
const burgerBtn = document.querySelector('#burgerBtn');
const header = document.querySelector('.header')
const headerMenu = document.querySelector('.header__menu')



burgerBtn.addEventListener('click', function(){
    console.log("hi");

    if(header.classList.contains('open')) {
        header.classList.remove('open');
        headerMenu.classList.remove('slide-in');
        headerMenu.classList.add('slide-out');
        
        
    }
    else {
        header.classList.add('open');
        headerMenu.classList.add('slide-in');
        headerMenu.classList.remove('slide-out');
        header.classList.remove('noscroll-horizontally');
        
    }
});
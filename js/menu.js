const menuIcon = document.querySelector('#menu-icon')
const menuOptions = document.querySelector('ul.menus')
const home = document.querySelector('#home')

menuIcon.addEventListener('click', () => {
    if (menuOptions.style.display == 'block' && window.innerWidth <= 480) {
        menuOptions.style.display = 'none'
    } else {
        menuOptions.style.display = 'block'
    }
})

menuOptions.addEventListener('click', () => {
    if (window.innerWidth <= 480){
        menuOptions.style.display = 'none'
    }
    else if (window.innerWidth >= 481){
        menuOptions.style.display = 'flex'
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 481 && window.innerWidth <= 768) {
        menuOptions.style.display = 'flex'
    } else {
        menuOptions.style.display = 'none'
    }
})
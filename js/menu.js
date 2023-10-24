const menuIcon = document.querySelector('#menu-icon')
const menuOptions = document.querySelector('ul.menus')
const home = document.querySelector('#home')

menuIcon.addEventListener('click', () => {
    if (menuOptions.style.display == 'block') {
        menuOptions.style.display = 'none'
    } else {
        menuOptions.style.display = 'block'
    }
})

menuOptions.addEventListener('click', () => {
    menuOptions.style.display = 'none'
})


const menuIcon = document.querySelector('#menu-icon')
const menuOptions = document.querySelector('ul.menus')
const home = document.querySelector('#home')

menuIcon.addEventListener('click', () => {
    if (menuOptions.style.display == 'block') {
        menuOptions.style.display = 'none'
        home.style.paddingTop = '0px'
    } else {
        menuOptions.style.display = 'block'
        home.style.paddingTop = '100px'
    }
})


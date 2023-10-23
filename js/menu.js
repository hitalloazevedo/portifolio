const menuIcon = document.querySelector('#menu-icon')
const menuOptions = document.querySelector('ul.menus')

menuIcon.addEventListener('click', () => {
    if (menuOptions.style.display == 'block') {
        menuOptions.style.display = 'none'
    } else {
        menuOptions.style.display = 'block'
    }
})


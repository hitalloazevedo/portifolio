const header = document.querySelector('#nav-menu')
const options = document.querySelectorAll('#nav-menu nav ul li a')

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('scroll')
        options.forEach((i) => i.classList.add('scrolla'))
    } else {
        header.classList.remove('scroll')
        options.forEach((i) => i.classList.remove('scrolla'))
    }
})

const swipeDownHome = document.querySelector('.swipe-down-home i')
const swipeDownAbout = document.querySelector('.swipe-down-about i')

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        swipeDownHome.style.scale = '0'
    } else {
        swipeDownHome.style.scale = '1'
    }

    swipeDownAbout.style.scale = '0'

    if (window.scrollY >= 900 && window.scrollY <= 900) {
        swipeDownAbout.style.scale = '1'
    } else if (window.screenY >= 900){
        swipeDownAbout.style.scale = '0'
    }

    console.log(window.scrollY)
})
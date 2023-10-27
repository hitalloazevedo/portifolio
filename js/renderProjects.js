import { projects } from "./db.js"

const swiperWrapper = document.querySelector('.swiper-wrapper')

function createCard(obj) {

    let swiperSlide    =    document.createElement('div')
    let card           =    document.createElement('div')
    let imageContent   =    document.createElement('div')
    let overlay        =    document.createElement('div')
    let cardImage      =    document.createElement('div')
    let img            =    document.createElement('img')
    let cardContent    =    document.createElement('div')
    let title          =    document.createElement('h2')
    let description    =    document.createElement('p')
    let links          =    document.createElement('div')
    let githubLink     =    document.createElement('a')
    let projectLink   =    document.createElement('a')

    
    swiperSlide.classList.add('swiper-slide')
    card.classList.add('card')
    imageContent.classList.add('image-content')
    overlay.classList.add('overlay')
    cardImage.classList.add('card-image')
    img.classList.add('card-img')
    cardContent.classList.add('card-content')
    title.classList.add('name')
    description.classList.add('description')
    links.classList.add('links')
    githubLink.innerHTML    =   '<i class="fa-brands fa-github"></i>'
    projectLink.innerHTML  =   '<i class="fa-solid fa-link"></i>'
    githubLink.target       =   '_blank'
    projectLink.target     =   '_blank'


    title.innerText          =   obj.name
    description.textContent  =   obj.description
    githubLink.href          =   obj.githubLink
    projectLink.href        =   obj.projectLink
    img.src                  =   obj.imageUri


    cardImage.appendChild(img)
    imageContent.appendChild(overlay)
    imageContent.appendChild(cardImage)
    cardContent.appendChild(title)
    cardContent.appendChild(description)
    links.appendChild(githubLink)
    links.appendChild(projectLink)
    cardContent.appendChild(links)
    card.appendChild(imageContent)
    card.appendChild(cardContent)
    swiperSlide.appendChild(card)


    return swiperSlide
}


function render(obj) {
    let newCard = createCard(obj)
    swiperWrapper.appendChild(newCard)
}


projects.forEach((p) => {
    render(p)
})


const emails = document.querySelectorAll('.emails a')

emails.forEach((e) => {
    e.addEventListener('click', (email) => {
        navigator.clipboard.writeText(e.textContent).then(() => {
            e.children[0].classList.add('copied')

            setTimeout(() => {
                e.children[0].classList.remove('copied')
            }, 1000)
        })
    })
})
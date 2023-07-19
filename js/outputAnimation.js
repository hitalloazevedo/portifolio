const output = document.querySelector('#console-output')

async function typeWriter(text, element) {
    let textArray = text.split('')
    let stringReverse = [...textArray].reverse()

    while (true) {
        for (let l in textArray) {
            await delay(60)
            element.textContent += textArray[l]
        }
    
        await delay(2000)
        
        for (let l in stringReverse) {
            await delay(40)
            element.textContent = element.textContent.replace(stringReverse[l], '')
        }

        await delay(2000)
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

typeWriter('Welcome to my portifolio website!', output)
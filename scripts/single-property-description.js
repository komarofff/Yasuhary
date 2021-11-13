document.addEventListener('DOMContentLoaded', () => {
    changeSection()
    showDescription()
})
window.onresize = () => {
    changeSection()
}

function changeSection() {
    let sizeScreen = document.documentElement.clientWidth
    if (sizeScreen < 769) {
        document.querySelector('.photos-block').classList.remove('container', 'md:mx-auto')
    } else {
        document.querySelector('.photos-block').classList.add('container', 'md:mx-auto')
    }
}

function showDescription() {
    const descriptionBlocks = document.querySelector('.description-text').innerHTML

    document.querySelector('.read-more').classList.remove('hidden')
    let text = descriptionBlocks
    let textSplit = text.split('.')
    let message = ''
    for(let i=0;i<textSplit.length;i++){
        if(message.length <400 ){
            message += `${textSplit[i]}.`
        }
    }
    document.querySelector('.description-text').innerHTML = `${message}  `


    const readMore = document.querySelector('.read-more')
    readMore.addEventListener('click', (e) => {
        e.target.classList.add('hidden')

        document.querySelector('.description-text').innerHTML = `${text}.`

    })
}

// function showDescription() {
//     const descriptionBlocks = document.querySelector('.description-blocks').querySelectorAll('p')
//     if (descriptionBlocks.length > 0) {
//         document.querySelector('.read-more').classList.remove('hidden')
//         for (let i = 0; i < descriptionBlocks.length; i++) {
//             if (i > 0) {
//                 descriptionBlocks[i].classList.add('hidden')
//             }
//         }
//     }
//
//     const readMore = document.querySelector('.read-more')
//     readMore.addEventListener('click', (e) => {
//         e.target.classList.add('hidden')
//         for (let i = 0; i < descriptionBlocks.length; i++) {
//             if (i > 0) {
//                 descriptionBlocks[i].classList.remove('hidden')
//             }
//         }
//
//     })
// }
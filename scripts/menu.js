const language_switchers = document.querySelectorAll(".language-switcher")
language_switchers.forEach((val) => {
    val.addEventListener('click', () => {
        val.parentNode.querySelector('.language-popup').classList.toggle('hidden')
    })

})

document.querySelector('.mobile-menu-switcher').addEventListener('click', () => {

    document.querySelector('.mobile-menu').classList.remove('hidden')
    document.querySelector('.block-menu').style.cssText = `
         -webkit-transform: translateX(0vw);
        -moz-transform: translateX(0vw);
        -ms-transform: translateX(0vw);
        -o-transform: translateX(0vw);
        transform: translateX(0vw);
        right: 0;`
})

document.querySelector('.mobile-menu-close').addEventListener('click', () => {

    document.querySelector('.mobile-menu').classList.add('hidden')
    document.querySelector('.block-menu').style.cssText = `
         -webkit-transform: translateX(-110vw);
        -moz-transform: translateX(-110vw);
        -ms-transform: translateX(-110vw);
        -o-transform: translateX(-110vw);
        transform: translateX(-110vw);
        right: 0;`
})

document.addEventListener('scroll', () => {
    if (pageYOffset > 1) {
        document.querySelector('.header').style.cssText = `
         min-width: 100vw;
         
    border-bottom: 1px solid #9FA3A8;
        `
    } else {
        document.querySelector('.header').style.cssText = ``
    }
})


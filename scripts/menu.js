// selector .popup-switcher - popups switchers on-off
// selector .animation-popup - popups animation
const language_switchers = document.querySelectorAll(".popup-switcher")
language_switchers.forEach((val) => {
    val.addEventListener('click', () => {
        val.parentNode.querySelector('.animation-popup').classList.toggle('hidden')

        // rotate arrows on tabs selects
        let isArrow = val.querySelector('.arrow-gray')
        if(isArrow){
            isArrow.classList.toggle('arrow-rotate')
        }
        // rotate arrows on language switcher
        if(val.classList.contains('language-switcher')){
            val.classList.toggle('arrow-rotate')
        }
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

window.addEventListener('resize', function(event) {
    console.log('resize')
    let size_of_screen = document.documentElement.clientWidth
    if( size_of_screen >768){

        document.querySelector('.block-menu').style.cssText = `
         -webkit-transform: translateX(0vw);
        -moz-transform: translateX(0vw);
        -ms-transform: translateX(0vw);
        -o-transform: translateX(0vw);
        transform: translateX(0vw);
        right: 0;`
    }else{
        document.querySelector('.block-menu').style.cssText = `
         -webkit-transform: translateX(-110vw);
        -moz-transform: translateX(-110vw);
        -ms-transform: translateX(-110vw);
        -o-transform: translateX(-110vw);
        transform: translateX(-110vw);
        right: 0;`
    }

})
//// language-switcher
 const lanqSwitchers = document.querySelectorAll('.language-switcher')
 lanqSwitchers.forEach((val)=>{
    const innerData = val.parentNode.querySelectorAll('.w-full.py-2.px-4.text-xs.cursor-pointer')
    innerData.forEach((elem)=>{
        elem.addEventListener('click',()=>{
            for(let i=0;i<innerData.length;i++){
                innerData[i].classList.remove('text-blue-500')
            }

            elem.classList.toggle('text-blue-500')
        })
    })
})
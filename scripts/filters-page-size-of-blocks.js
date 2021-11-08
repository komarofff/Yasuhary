document.addEventListener('DOMContentLoaded',()=>{
    getHeights()
})
window.onresize = ()=>{
    getHeights()
}
function getHeights() {
    let screenWidth = document.documentElement.clientWidth
    let screenHeight = document.documentElement.clientHeight
    let headerHeight = document.querySelector('header').getBoundingClientRect().height
    let footerHeight = document.querySelector('footer').getBoundingClientRect().height
    let resultHeight = screenHeight - headerHeight - 80
    if(screenWidth>768) {
        document.querySelector('.properties-list-block').classList.add('overflow-style')
        document.querySelector('.filters-block').classList.add('overflow-style')
        document.querySelector('.properties-list-block').style.cssText = `height: ${resultHeight}px;`
        document.querySelector('.filters-block').style.cssText = `height: ${resultHeight}px;`
    }else{
        document.querySelector('.properties-list-block').style.cssText = ``
        document.querySelector('.filters-block').style.cssText = ``
        document.querySelector('.properties-list-block').classList.remove('overflow-style')
        document.querySelector('.filters-block').classList.remove('overflow-style')
        document.querySelector('.fix-mobile').style.cssText = `padding-top: ${headerHeight}px`
        let result2 = headerHeight+50
        document.querySelector('main').style.cssText = `padding-top: ${result2}px`
    }
}
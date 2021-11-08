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
    let resultHeightFoot = screenHeight - headerHeight - footerHeight
    let result2 = headerHeight
    if(screenWidth>767) {
        document.querySelector('.properties-list-block').classList.add('overflow-style')
        document.querySelector('.filters-block').classList.add('overflow-style')
        document.querySelector('.properties-list-block').style.cssText = `min-height: ${resultHeight+50}px;`
        document.querySelector('.filters-block').style.cssText = `height: ${resultHeight+50}px;`
        document.querySelector('.map-place').style.cssText = `height: ${resultHeightFoot}px;`
        document.querySelector('main').style.cssText = `padding-top: ${result2}px`
    }else{
        document.querySelector('.properties-list-block').style.cssText = ``
        document.querySelector('.filters-block').style.cssText = ``
        document.querySelector('.map-place').style.cssText = ``
        document.querySelector('.properties-list-block').classList.remove('overflow-style')
        document.querySelector('.filters-block').classList.remove('overflow-style')
        const fixPopups = document.querySelectorAll('.fix-mobile')
        fixPopups.forEach((ele)=>{
            ele.style.cssText = `padding-top: ${headerHeight}px`
        })

        document.querySelector('main').style.cssText = `padding-top: ${result2+50}px`
    }
}


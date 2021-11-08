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
    let resultHeightFoot = screenHeight - headerHeight 
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


document.querySelector('.filter-switcher').addEventListener('click', (e) => {
    //filters-block
    const blocks = document.querySelectorAll('.inner-blocks-mobile')
    blocks.forEach((el) => {
        el.classList.add('hidden')
    })
    document.querySelector('.filters-block').classList.remove('hidden')

    document.querySelector('.filters-popup').classList.remove('hidden')
    document.querySelector('.all-popup').classList.add('hidden')
})
//close-filters-popup
document.querySelector('.close-filters-popup').addEventListener('click', () => {
    document.querySelector('.filters-popup').classList.add('hidden')
    document.querySelector('.all-popup').classList.remove('hidden')

    document.querySelector('.filters-block').classList.add('hidden')
    if (document.querySelector('.list-block').classList.contains('active-block-here')) {
        document.querySelector('.list-block').classList.remove('hidden')
    }
    if (document.querySelector('.map-block').classList.contains('active-block-here')) {
        document.querySelector('.map-block').classList.remove('hidden')
    }
})

document.querySelector('.map-list-switcher').addEventListener('click', (e) => {
    if (e.target.classList.contains('map-off')) {
        e.target.classList.add('map-on')
        e.target.classList.remove('map-off')
        e.target.src = 'images/list.svg'
        //
        document.querySelector('.list-block').classList.remove('active-block-here')
        document.querySelector('.list-block').classList.add('hidden')
        document.querySelector('.map-block').classList.add('active-block-here')
        document.querySelector('.map-block').classList.remove('hidden')
    } else {
        e.target.classList.add('map-off')
        e.target.classList.remove('map-on')
        e.target.src = 'images/map-mobile.svg'
        document.querySelector('.list-block').classList.add('active-block-here')
        document.querySelector('.list-block').classList.remove('hidden')
        document.querySelector('.map-block').classList.remove('active-block-here')
        document.querySelector('.map-block').classList.add('hidden')
    }
})


//// filter block show-hide to left
document.querySelector('.on-off-filter-block').addEventListener('click',(e)=>{
    if (e.target.classList.contains('block-on')) {
        e.target.classList.add('block-off')
        e.target.classList.remove('block-on')
        e.target.src = 'images/chevron-right.png'
        //
        document.querySelector('.list-block').classList.remove('md:w-4/12')
        document.querySelector('.list-block').classList.add('md:w-6/12')
        document.querySelector('.map-block').classList.remove('md:w-4/12')
        document.querySelector('.map-block').classList.add('md:w-6/12')
        document.querySelector('.filters-block ').classList.remove('md:w-4/12')
        document.querySelector('.filters-block ').classList.add('md:w-0')
        document.querySelector('.filters-block ').classList.remove('md:px-2')
        document.querySelector('.filters-block ').classList.add('md:px-0')

    }
    else{
        e.target.classList.add('block-on')
        e.target.classList.remove('block-off')
        e.target.src = 'images/chevron-left.png'
        //
        document.querySelector('.list-block').classList.remove('md:w-6/12')
        document.querySelector('.list-block').classList.add('md:w-4/12')
        document.querySelector('.map-block').classList.remove('md:w-6/12')
        document.querySelector('.map-block').classList.add('md:w-4/12')
        document.querySelector('.filters-block ').classList.remove('md:w-0')
        document.querySelector('.filters-block ').classList.add('md:w-4/12')
        document.querySelector('.filters-block ').classList.remove('md:px-0')
        document.querySelector('.filters-block ').classList.add('md:px-2')

    }
})

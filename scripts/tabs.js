window.onresize = () => {
    size_of_screen = document.documentElement.clientWidth
}
const tabs = document.querySelectorAll('.tabs')
const tabsContent = document.querySelectorAll('.tabs-content')
const tabsContent2 = document.querySelectorAll('.tabs-content2')
tabs.forEach((val, key) => {
    val.addEventListener('click', () => {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('tabs-active')
        }
        val.classList.add('tabs-active')
        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].classList.add('hidden')
            tabsContent[i].classList.remove('md:flex')

        }
        tabsContent[key].classList.add('md:flex')

    })
})
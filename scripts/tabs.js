const tabs = document.querySelectorAll('.tabs')
const tabsContent = document.querySelectorAll('.tabs-content')

tabs.forEach((val, key) => {
    val.addEventListener('click', () => {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('tabs-active')
        }
        val.classList.add('tabs-active')
        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].classList.add('hidden')
            tabsContent[i].classList.remove('md:grid')

        }
        tabsContent[key].classList.add('md:grid')

    })
})
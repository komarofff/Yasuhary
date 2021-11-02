const tabs = document.querySelectorAll('.tabs')
const tabsContent = document.querySelectorAll('.tabs-content')
categoryProperty = tabs[0].innerHTML
categoryProperty = categoryProperty.replace(/\s{2,}/g, ' ');
categoryProperty = categoryProperty.trim()

tabs.forEach((val, key) => {
    val.addEventListener('click', () => {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('tabs-active')
        }
        val.classList.add('tabs-active')
        categoryProperty = val.innerHTML
        categoryProperty = categoryProperty.replace(/\s{2,}/g, ' ');
        categoryProperty = categoryProperty.trim()

        // for (let i = 0; i < tabsContent.length; i++) {
        //     tabsContent[i].classList.add('hidden')
        //     tabsContent[i].classList.remove('md:grid')
        //
        // }
        // tabsContent[key].classList.add('md:grid')

    })
})
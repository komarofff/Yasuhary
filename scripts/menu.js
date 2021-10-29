const language_switchers = document.querySelectorAll(".language-switcher")
    language_switchers.forEach((val)=>{
    val.addEventListener('click',()=>{
        val.parentNode.querySelector('.language-popup').classList.toggle('hidden')
    })

})


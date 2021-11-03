const contactButtons = document.querySelectorAll('.contact-button')
const contactTabs = document.querySelectorAll('.contact-inner-tab')
contactButtons.forEach((val,key)=>{
    val.addEventListener('click',()=>{
        for(let i=0; i<contactButtons.length;i++){
            contactButtons[i].classList.remove('tabs-active')
        }
        val.classList.add('tabs-active')
        for(let i=0; i<contactTabs.length;i++){
            contactTabs[i].classList.add('hidden')
        }
        contactTabs[key].classList.remove('hidden')
    })
})
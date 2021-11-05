
// on-off select areas
const  firstlevel = document.querySelectorAll('.input-header')
firstlevel.forEach((val)=>{

    // val.onclick= ()=> {
    //     alert('click')
    //     lastlevel = val.parentNode.querySelector('.select-popup')
    //     lastlevel.size = lastlevel.length
    //     lastlevel.focus()
    //     lastlevel.onchange = lastlevel.onclick = lastlevel.onblur = () => {
    //
    //         lastlevel.size = 1
    //     }
    // }
    val.ontouchstart = () =>{
        alert('touthstart')
        lastlevel = val.parentNode.querySelector('.select-popup')
        lastlevel.size = lastlevel.length
        lastlevel.focus()
        // lastlevel.onchange =  lastlevel.onblur = () => {
        //     lastlevel.size = 1
        // }
    }

})
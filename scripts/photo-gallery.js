// сколько фоток в экране -считать
// по нажатию менять яркость
// сколько фоток в экране
// сколько фоток в экране


let gallery = document.getElementById('gallery')
const allPhotos = gallery.querySelectorAll('.gallery-photo')
const allPhotosAmount = allPhotos.length
let currentTargetNumber = 1
document.addEventListener('DOMContentLoaded', () => {

    getTopPhoto()
})
window.onresize = () => {
    calcData()
}

allPhotos.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
        currentTargetNumber = index + 1
        console.log('currentTargetNumber =' + currentTargetNumber)
        for (let i = 0; i < allPhotos.length; i++) {
            allPhotos[i].classList.remove('top-photo')
        }
        e.target.classList.add('top-photo')
        getTopPhoto()
    })
})

function calcData() {
    const screenWidth = document.documentElement.clientWidth
    const singlePhotoWidth = allPhotos[0].getBoundingClientRect().width + 10
    const amountPhotosInScreen = Math.floor(screenWidth / singlePhotoWidth)
    console.log('singlePhotoWidth=' + singlePhotoWidth, 'screenWidth=' + screenWidth)
    console.log('allPhotosAmount ='+allPhotosAmount )
    console.log('amountPhotosInScreen =' + amountPhotosInScreen )
    console.log('currentTargetNumber =' + currentTargetNumber )
}

function getTopPhoto() {
    calcData()
    if (gallery.querySelector('.top-photo')) {
        const topPhoto = gallery.querySelector('.top-photo')
        //let pk = topPhoto.cloneNode()
        //console.log(pk)
        const newPhoto = topPhoto.src
        document.getElementById('top-photo').innerHTML = `<img src="${newPhoto}">`
        //document.getElementById('top-photo').appendChild(pk)
    }


}
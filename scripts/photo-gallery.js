// сколько фоток в экране -считать
// по нажатию менять яркость
// сколько фоток в экране
// сколько фоток в экране

//
// let gallery = document.getElementById('gallery')
// const allPhotos = gallery.querySelectorAll('.gallery-photo')
// const allPhotosAmount = allPhotos.length
// let currentTargetNumber = 1
// let startPosition = 0
// document.addEventListener('DOMContentLoaded', () => {
//
//     getTopPhoto()
// })
// window.onresize = () => {
//     calcData()
// }
//
// allPhotos.forEach((elem, index) => {
//     elem.addEventListener('click', (e) => {
//         currentTargetNumber = index + 1
//         console.log('currentTargetNumber =' + currentTargetNumber)
//         for (let i = 0; i < allPhotos.length; i++) {
//             allPhotos[i].classList.remove('top-photo')
//         }
//         e.target.classList.add('top-photo')
//         getTopPhoto()
//     })
// })
// allPhotos.forEach((elem, index) => {
//     elem.addEventListener('touchstart', (e) => {
//         currentTargetNumber = index + 1
//         console.log('currentTargetNumber =' + currentTargetNumber)
//         for (let i = 0; i < allPhotos.length; i++) {
//             allPhotos[i].classList.remove('top-photo')
//         }
//         e.target.classList.add('top-photo')
//         getTopPhoto()
//     })
// })
// // go left
// document.querySelector('.arrow-gallery-left').addEventListener('click',()=>{
//     if(currentTargetNumber>1) {
//     for (let i = 0; i < allPhotos.length; i++) {
//         allPhotos[i].classList.remove('top-photo')
//     }
//
//         currentTargetNumber--
//         allPhotos[currentTargetNumber - 1].classList.add('top-photo')
//         getTopPhoto()
//     }
// })
// document.querySelector('.arrow-gallery-left').addEventListener('touchstart',()=>{
//     if(currentTargetNumber>1) {
//         for (let i = 0; i < allPhotos.length; i++) {
//             allPhotos[i].classList.remove('top-photo')
//         }
//
//         currentTargetNumber--
//         allPhotos[currentTargetNumber - 1].classList.add('top-photo')
//         getTopPhoto()
//     }
// })
// // go right
// document.querySelector('.arrow-gallery-right').addEventListener('click',()=>{
//     if(currentTargetNumber<allPhotos.length) {
//         for (let i = 0; i < allPhotos.length; i++) {
//             allPhotos[i].classList.remove('top-photo')
//         }
//         currentTargetNumber++
//         allPhotos[currentTargetNumber - 1].classList.add('top-photo')
//         getTopPhoto()
//     }
// })
// document.querySelector('.arrow-gallery-right').addEventListener('touchstart',()=>{
//     if(currentTargetNumber<allPhotos.length) {
//         for (let i = 0; i < allPhotos.length; i++) {
//             allPhotos[i].classList.remove('top-photo')
//         }
//         currentTargetNumber++
//         allPhotos[currentTargetNumber - 1].classList.add('top-photo')
//         getTopPhoto()
//     }
// })
//
//
//
// function calcData() {
//      screenWidth = document.documentElement.clientWidth
//      singlePhotoWidth = allPhotos[0].getBoundingClientRect().width + 10
//      amountPhotosInScreen = Math.floor(screenWidth / singlePhotoWidth)
//     console.log('singlePhotoWidth=' + singlePhotoWidth, 'screenWidth=' + screenWidth)
//     console.log('allPhotosAmount =' + allPhotosAmount)
//     console.log('amountPhotosInScreen =' + amountPhotosInScreen)
//     console.log('currentTargetNumber =' + currentTargetNumber)
//     document.getElementById('amount-of-photos').innerHTML = `${currentTargetNumber} of ${allPhotosAmount}`
// }
//
// function getTopPhoto() {
//     calcData()
//     if (gallery.querySelector('.top-photo')) {
//         const topPhoto = gallery.querySelector('.top-photo')
//         //let pk = topPhoto.cloneNode()
//         //console.log(pk)
//         const newPhoto = topPhoto.src
//         document.getElementById('top-photo').innerHTML = `<img src="${newPhoto}">`
//         //document.getElementById('top-photo').appendChild(pk)
//     }
// //// ?????????
//     if( currentTargetNumber>(amountPhotosInScreen/2) ){
//         startPosition+=2
//         console.log('startPosition='+startPosition)
//         let moveBlock = startPosition*singlePhotoWidth+10
//         document.getElementById('gallery').style.cssText = `transform: translateX(-${moveBlock}px);`
//
//         console.log("надо двигать")
//     }
//
// }
//

//open gallery block
const galSwitchers = document.querySelectorAll('.gallery-switchers')
let counterButtons = 0
galSwitchers.forEach((val)=>{
    val.addEventListener('click',(e)=>{
        if(val.classList.contains('button-3d')){
            start3D()
        }else{
            startGallery()
        }
    })
})

document.querySelector('.play-3d').addEventListener('click', () => {
    start3D()
})
document.querySelector('.open-gallery').addEventListener('click', () => {
    startGallery()
})
// close gallery block
document.querySelector('.close-gallery-container').addEventListener('click', () => {
    document.getElementById('gallery-block').classList.add('hidden')
    document.getElementById('photo-block').classList.add('hidden')
    document.getElementById('video-block').classList.add('hidden')
})

function start3D(){
    document.getElementById('gallery-block').classList.remove('hidden')
    document.getElementById('video-block').classList.remove('hidden')
    document.getElementById('photo-block').classList.add('hidden')
    document.querySelector('.button-3d').classList.add('tabs-active')
    document.querySelector('.gallery-button').classList.remove('tabs-active')
}

function  startGallery(){
    document.getElementById('gallery-block').classList.remove('hidden')
    document.getElementById('photo-block').classList.remove('hidden')
    document.getElementById('video-block').classList.add('hidden')
    document.querySelector('.gallery-button').classList.add('tabs-active')
    document.querySelector('.button-3d').classList.remove('tabs-active')
}
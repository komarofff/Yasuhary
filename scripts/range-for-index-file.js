// range for tabs zone
// $( function() {
//     $( "#slider-range" ).slider({
//         range: true,
//         min: 1000,
//         max: 100000000,
//         values: [ 25000, 32000000 ],
//         slide: function( event, ui ) {
//             $( "#amount" ).val( "¥" + ui.values[ 0 ] + " - ¥" + ui.values[ 1 ] );
//         }
//     });
//     $( "#amount" ).val( "¥" + $( "#slider-range" ).slider( "values", 0 ) +
//         " - ¥" + $( "#slider-range" ).slider( "values", 1 ) );
// } );
function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

$( function() {
    $( "#slider-range1" ).slider({
        step: 1000,
        range: true,
        min: 1000,
        max: 100000000,
        values: [ 25000, 32000000 ],
        slide: function( event, ui ) {
            $( "#amount1" ).html( "¥ " + prettify(ui.values[ 0 ]) + " - ¥ " + prettify(ui.values[ 1 ]) );
            propertyPriceMin = prettify(ui.values[ 0 ])
            propertyPriceMax = prettify(ui.values[ 1 ])
        }
    });
    $( "#amount1" ).html( "¥ " + prettify($( "#slider-range1" ).slider( "values", 0 )) +
        " - ¥ " + prettify($( "#slider-range1" ).slider( "values", 1 )) );
    propertyPriceMin =$( "#slider-range1" ).slider( "values", 0 )
    propertyPriceMax =$( "#slider-range1" ).slider( "values", 1 )

} );
//
// $( function() {
//     $( "#slider-range2" ).slider({
//         step: 1000,
//         range: true,
//         min: 1000,
//         max: 100000000,
//         values: [ 25000, 32000000 ],
//         slide: function( event, ui ) {
//             $( "#amount2" ).html( "¥ " + prettify(ui.values[ 0 ]) + " - ¥ " + prettify(ui.values[ 1 ]) );
//         }
//     });
//     $( "#amount2" ).html( "¥" + prettify($( "#slider-range2" ).slider( "values", 0 )) +
//         " - ¥" + prettify($( "#slider-range2" ).slider( "values", 1 )) );
// } );
//
// $( function() {
//     $( "#slider-range3" ).slider({
//         step: 1000,
//         range: true,
//         min: 1000,
//         max: 100000000,
//         values: [ 25000, 32000000 ],
//         slide: function( event, ui ) {
//             $( "#amount3" ).html( "¥ " + prettify(ui.values[ 0 ]) + " - ¥ " + prettify(ui.values[ 1 ]) );
//         }
//     });
//     $( "#amount3" ).html( "¥" + prettify($( "#slider-range3" ).slider( "values", 0 )) +
//         " - ¥" + prettify($( "#slider-range3" ).slider( "values", 1 )) );
// } );
//
// $( function() {
//     $( "#slider-range4" ).slider({
//         step: 1000,
//         range: true,
//         min: 1000,
//         max: 100000000,
//         values: [ 25000, 32000000 ],
//         slide: function( event, ui ) {
//             $( "#amount4" ).html( "¥ " + prettify(ui.values[ 0 ]) + " - ¥ " + prettify(ui.values[ 1 ]) );
//         }
//     });
//     $( "#amount4" ).html( "¥" + prettify($( "#slider-range4" ).slider( "values", 0 )) +
//         " - ¥" + prettify($( "#slider-range4" ).slider( "values", 1 )) );
// } );

let propertyLocation = 'Hirosima'
let propertyAge= '1'
let propertyRoi = '1%'

const popupBlocks = document.querySelectorAll('.tab-popup')
popupBlocks.forEach((val)=>{
    const popupDatas = val.querySelectorAll('.popup-data')
    popupDatas.forEach((data)=>{
        data.addEventListener('click',()=>{
            for(let i=0;i<popupDatas.length;i++){
                popupDatas[i].classList.remove('text-blue-500')
            }
            data.classList.add('text-blue-500')


             locationProperty = val.parentNode.querySelector('.arrow-gray').innerHTML
            if(locationProperty==='Location'){
                propertyLocation = data.innerHTML
            }
            if(locationProperty==='Age'){
                propertyAge = data.innerHTML
            }
            if(locationProperty==='ROI'){
                propertyRoi = data.innerHTML
            }

        })
    })
})
function  desktopSearch() {
    document.querySelector('.search-desktop').addEventListener('click', () => {
        console.log('category=', categoryProperty)
        console.log('propertyLocation=', propertyLocation)
        console.log('propertyAge=', propertyAge)
        console.log('propertyRoi=', propertyRoi)
        console.log('propertyPriceMin=', propertyPriceMin)
        console.log('propertyPriceMax=', propertyPriceMax)

    })
}

function mobileSearch() {
    document.getElementById('category').addEventListener('change', function(e) {
        this.parentNode.querySelector('.input-header').classList.remove('hidden')
            categoryProperty =  this.value;
    })
    document.getElementById('location').addEventListener('change', function() {
        // this.parentNode.querySelector('.input-header').classList.remove('hidden')
        propertyLocation =  this.value;
    })
    document.getElementById('age').addEventListener('change', function() {
        this.parentNode.querySelector('.input-header').classList.remove('hidden')
        propertyAge =  this.value;
    })
    document.getElementById('roi').addEventListener('change', function() {
        this.parentNode.querySelector('.input-header').classList.remove('hidden')
        propertyRoi =  this.value;
    })
    document.getElementById('minPrice').addEventListener('change', function() {
        propertyPriceMin =  this.value;
    })
    document.getElementById('maxPrice').addEventListener('change', function() {
        propertyPriceMax =  this.value;
    })

        document.querySelector('.search-mobile').addEventListener('click', () => {
            console.log('category=', categoryProperty)
            console.log('propertyLocation=', propertyLocation)
            console.log('propertyAge=', propertyAge)
            console.log('propertyRoi=', propertyRoi)
            console.log('propertyPriceMin=', propertyPriceMin)
            console.log('propertyPriceMax=', propertyPriceMax)

        })
}

var size_of_screen2 = document.documentElement.clientWidth
if (size_of_screen2 <= 768) {
mobileSearch()
}else{
    desktopSearch()
}
window.onresize = () => {
    var size_of_screen2 = document.documentElement.clientWidth
    if (size_of_screen2 <= 768) {
        mobileSearch()
    }else{
        desktopSearch()
    }

}
//
// // on-off select areas
// const  firstlevel = document.querySelectorAll('.input-header')
// firstlevel.forEach((val)=>{
//
//     val.onclick= ()=> {
//         lastlevel = val.parentNode.querySelector('.select-popup')
//         lastlevel.size = lastlevel.length
//         lastlevel.focus()
//       lastlevel.onchange = lastlevel.onclick = lastlevel.onblur = () => {
//
//             lastlevel.size = 1
//         }
//     }
//     val.ontouchstart = () =>{
//         lastlevel = val.parentNode.querySelector('.select-popup')
//         lastlevel.size = lastlevel.length
//         lastlevel.focus()
//       lastlevel.onchange = lastlevel.onclick = lastlevel.onblur = () => {
//             lastlevel.size = 1
//         }
//     }
//
// })
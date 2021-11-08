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
            $( "#amount1" ).html( "<p class='text-xxs'>¥ " + prettify(ui.values[ 0 ]) + "</p><p class='text-xxs'> ¥ " + prettify(ui.values[ 1 ]) +"</p>" );
            propertyPriceMin = prettify(ui.values[ 0 ])
            propertyPriceMax = prettify(ui.values[ 1 ])
        }
    });
    $( "#amount1" ).html( "<p class='text-xxs'>¥ " + prettify($( "#slider-range1" ).slider( "values", 0 )) +
        "</p><p class='text-xxs'> ¥ " + prettify($( "#slider-range1" ).slider( "values", 1 )) +"</p>");
    propertyPriceMin =$( "#slider-range1" ).slider( "values", 0 )
    propertyPriceMax =$( "#slider-range1" ).slider( "values", 1 )

} );



function  desktopSearch() {

    const popupBlocks = document.querySelectorAll('.tab-popup')
    popupBlocks.forEach((val) => {
        const popupDatas = val.querySelectorAll('.popup-data')
        for(let i=0; i<popupBlocks.length;i++){
            popupBlocks[i].parentNode.querySelector('.text-area').innerHTML =  popupBlocks[i].querySelectorAll('.popup-data')[0].dataset.title
        }

        popupDatas.forEach((data) => {
            data.addEventListener('click', () => {
                for (let i = 0; i < popupDatas.length; i++) {
                    popupDatas[i].classList.remove('text-blue-500')
                }
                data.classList.add('text-blue-500')

                data.parentNode.parentNode.querySelector('.text-area').innerHTML = data.dataset.title
                data.parentNode.classList.add('hidden')
                console.log('Name of parent ='+data.parentNode.parentNode.querySelector('.arrow-gray').dataset.name ,' | Selected item ='+data.dataset.title)
                // rotate arrows on tabs selects
                let isArrow2 = data.parentNode.parentNode.querySelector('.arrow-gray')
                if(isArrow2){
                    isArrow2.classList.toggle('arrow-rotate')
                }

                locationProperty = val.parentNode.querySelector('.arrow-gray').dataset.name
                if (locationProperty === 'Location') {
                    propertyLocation = data.dataset.title
                    propertyLocation = propertyLocation.trim()
                    //propertyLocation = propertyLocation.replace(/\s/g, '');
                }
                if (locationProperty === 'Age') {
                    propertyAge = data.innerHTML
                    propertyAge = propertyAge.trim()
                    //propertyAge = propertyAge.replace(/\s/g, '');
                }
                if (locationProperty === 'ROI') {
                    propertyRoi = data.innerHTML
                    propertyRoi = propertyRoi.trim()
                    //propertyRoi = propertyRoi.replace(/\s/g, '');
                }

            })
        })
    })
}
document.addEventListener('DOMContentLoaded',()=>{
    desktopSearch()
})
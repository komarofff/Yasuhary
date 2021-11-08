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
//price range
$( function() {
    $( "#price-range" ).slider({
        step: 1000,
        range: true,
        min: 1000,
        max: 100000000,
        values: [ 25000, 32000000 ],
        slide: function( event, ui ) {
            $( "#price-range-amount" ).html( "<p class='text-xs'>¥ " + prettify(ui.values[ 0 ]) + "</p><p class='text-xs'> ¥ " + prettify(ui.values[ 1 ]) +"</p>" );
            propertyPriceMin = prettify(ui.values[ 0 ])
            propertyPriceMax = prettify(ui.values[ 1 ])
        }
    });
    $( "#price-range-amount" ).html( "<p class='text-xs'>¥ " + prettify($( "#price-range" ).slider( "values", 0 )) +
        "</p><p class='text-xs'> ¥ " + prettify($( "#price-range" ).slider( "values", 1 )) +"</p>");
    propertyPriceMin =$( "#price-range" ).slider( "values", 0 )
    propertyPriceMax =$( "#price-range" ).slider( "values", 1 )

} );
//number-of-floors
$( function() {
    $( "#number-of-floors" ).slider({
        step: 1,
        range: true,
        min: 1,
        max: 200,
        values: [ 0, 200 ],
        slide: function( event, ui ) {
            $( "#number-of-floors-amount" ).html( "<p class='text-xs'> " + prettify(ui.values[ 0 ]) + "</p><p class='text-xs'>  " + prettify(ui.values[ 1 ]) +"</p>" );
            propertyPriceMin = prettify(ui.values[ 0 ])
            propertyPriceMax = prettify(ui.values[ 1 ])
        }
    });
    $( "#number-of-floors-amount" ).html( "<p class='text-xs'> " + prettify($( "#number-of-floors" ).slider( "values", 0 )) +
        "</p><p class='text-xs'>  " + prettify($( "#number-of-floors" ).slider( "values", 1 )) +"</p>");
    propertyPriceMin =$( "#number-of-floors" ).slider( "values", 0 )
    propertyPriceMax =$( "#number-of-floors" ).slider( "values", 1 )

} );

//build-date-range
$( function() {
    var currentTime = new Date()
    var year = currentTime.getFullYear()
    $( "#build-date-range" ).slider({
        step: 1,
        range: true,
        min: 1900,
        max: year,
        values: [ 0, year ],
        slide: function( event, ui ) {
            $( "#build-date-range-amount" ).html( "<p class='text-xs'> " + ui.values[ 0 ] + "</p><p class='text-xs'>  " + ui.values[ 1 ] +"</p>" );
            propertyPriceMin = prettify(ui.values[ 0 ])
            propertyPriceMax = prettify(ui.values[ 1 ])
        }
    });
    $( "#build-date-range-amount" ).html( "<p class='text-xs'> " + $( "#build-date-range" ).slider( "values", 0 ) +
        "</p><p class='text-xs'>  " + $( "#build-date-range" ).slider( "values", 1 ) +"</p>");
    propertyPriceMin =$( "#build-date-range" ).slider( "values", 0 )
    propertyPriceMax =$( "#build-date-range" ).slider( "values", 1 )

} );

//number-of-rooms
$( function() {
    $( "#number-of-rooms" ).slider({
        step: 1,
        range: true,
        min: 1,
        max: 100,
        values: [ 0, 100 ],
        slide: function( event, ui ) {
            $( "#number-of-rooms-amount" ).html( "<p class='text-xs'> " + ui.values[ 0 ] + "</p><p class='text-xs'>  " + ui.values[ 1 ] +"</p>" );
            propertyPriceMin = prettify(ui.values[ 0 ])
            propertyPriceMax = prettify(ui.values[ 1 ])
        }
    });
    $( "#number-of-rooms-amount" ).html( "<p class='text-xs'> " + $( "#number-of-rooms" ).slider( "values", 0 ) +
        "</p><p class='text-xs'>  " + $( "#number-of-rooms" ).slider( "values", 1 ) +"</p>");
    propertyPriceMin =$( "#number-of-rooms" ).slider( "values", 0 )
    propertyPriceMax =$( "#number-of-rooms" ).slider( "values", 1 )

} );
//building-size
$( function() {
    $( "#building-size" ).slider({
        step: 1,
        range: true,
        min: 1,
        max: 10000,
        values: [ 0, 10000 ],
        slide: function( event, ui ) {
            $( "#building-size-amount" ).html( "<p class='text-xs'> " + prettify(ui.values[ 0 ]) + " m<sup>2</sup></p><p class='text-xs'>  " + prettify(ui.values[ 1 ]) +" m<sup>2</sup></p>" );
            propertyPriceMin = prettify(ui.values[ 0 ])
            propertyPriceMax = prettify(ui.values[ 1 ])
        }
    });
    $( "#building-size-amount" ).html( "<p class='text-xs'> " + prettify($( "#building-size" ).slider( "values", 0 )) +
        " m<sup>2</sup></p><p class='text-xs'>  " + prettify($( "#building-size" ).slider( "values", 1 )) +" m<sup>2</sup></p>");
    propertyPriceMin =$( "#building-size" ).slider( "values", 0 )
    propertyPriceMax =$( "#building-size" ).slider( "values", 1 )

} );
//land-size
$( function() {
    $( "#land-size" ).slider({
        step: 1,
        range: true,
        min: 1,
        max: 100000,
        values: [ 0, 100000 ],
        slide: function( event, ui ) {
            $( "#land-size-amount" ).html( "<p class='text-xs'> " + prettify(ui.values[ 0 ]) + " m<sup>2</sup></p><p class='text-xs'>  " + prettify(ui.values[ 1 ]) +" m<sup>2</sup></p>" );
            propertyPriceMin = prettify(ui.values[ 0 ])
            propertyPriceMax = prettify(ui.values[ 1 ])
        }
    });
    $( "#land-size-amount" ).html( "<p class='text-xs'> " + prettify($( "#land-size" ).slider( "values", 0 )) +
        " m<sup>2</sup></p><p class='text-xs'>  " + prettify($( "#land-size" ).slider( "values", 1 )) +" m<sup>2</sup></p>");
    propertyPriceMin =$( "#land-size" ).slider( "values", 0 )
    propertyPriceMax =$( "#bland-size" ).slider( "values", 1 )

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
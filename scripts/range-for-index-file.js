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
        }
    });
    $( "#amount1" ).html( "¥ " + prettify($( "#slider-range1" ).slider( "values", 0 )) +
        " - ¥ " + prettify($( "#slider-range1" ).slider( "values", 1 )) );
} );

$( function() {
    $( "#slider-range2" ).slider({
        step: 1000,
        range: true,
        min: 1000,
        max: 100000000,
        values: [ 25000, 32000000 ],
        slide: function( event, ui ) {
            $( "#amount2" ).html( "¥ " + prettify(ui.values[ 0 ]) + " - ¥ " + prettify(ui.values[ 1 ]) );
        }
    });
    $( "#amount2" ).html( "¥" + prettify($( "#slider-range2" ).slider( "values", 0 )) +
        " - ¥" + prettify($( "#slider-range2" ).slider( "values", 1 )) );
} );

$( function() {
    $( "#slider-range3" ).slider({
        step: 1000,
        range: true,
        min: 1000,
        max: 100000000,
        values: [ 25000, 32000000 ],
        slide: function( event, ui ) {
            $( "#amount3" ).html( "¥ " + prettify(ui.values[ 0 ]) + " - ¥ " + prettify(ui.values[ 1 ]) );
        }
    });
    $( "#amount3" ).html( "¥" + prettify($( "#slider-range3" ).slider( "values", 0 )) +
        " - ¥" + prettify($( "#slider-range3" ).slider( "values", 1 )) );
} );

$( function() {
    $( "#slider-range4" ).slider({
        step: 1000,
        range: true,
        min: 1000,
        max: 100000000,
        values: [ 25000, 32000000 ],
        slide: function( event, ui ) {
            $( "#amount4" ).html( "¥ " + prettify(ui.values[ 0 ]) + " - ¥ " + prettify(ui.values[ 1 ]) );
        }
    });
    $( "#amount4" ).html( "¥" + prettify($( "#slider-range4" ).slider( "values", 0 )) +
        " - ¥" + prettify($( "#slider-range4" ).slider( "values", 1 )) );
} );
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
$( function() {
    $( "#slider-range1" ).slider({
        range: true,
        min: 1000,
        max: 100000000,
        values: [ 25000, 32000000 ],
        slide: function( event, ui ) {
            $( "#amount1" ).html( "¥" + ui.values[ 0 ] + " - ¥" + ui.values[ 1 ] );
        }
    });
    $( "#amount1" ).html( "¥" + $( "#slider-range1" ).slider( "values", 0 ) +
        " - ¥" + $( "#slider-range1" ).slider( "values", 1 ) );
} );

$( function() {
    $( "#slider-range2" ).slider({
        range: true,
        min: 1000,
        max: 100000000,
        values: [ 25000, 32000000 ],
        slide: function( event, ui ) {
            $( "#amount2" ).html( "¥" + ui.values[ 0 ] + " - ¥" + ui.values[ 1 ] );
        }
    });
    $( "#amount2" ).html( "¥" + $( "#slider-range2" ).slider( "values", 0 ) +
        " - ¥" + $( "#slider-range2" ).slider( "values", 1 ) );
} );

$( function() {
    $( "#slider-range3" ).slider({
        range: true,
        min: 1000,
        max: 100000000,
        values: [ 25000, 32000000 ],
        slide: function( event, ui ) {
            $( "#amount3" ).html( "¥" + ui.values[ 0 ] + " - ¥" + ui.values[ 1 ] );
        }
    });
    $( "#amount3" ).html( "¥" + $( "#slider-range3" ).slider( "values", 0 ) +
        " - ¥" + $( "#slider-range3" ).slider( "values", 1 ) );
} );

$( function() {
    $( "#slider-range4" ).slider({
        range: true,
        min: 1000,
        max: 100000000,
        values: [ 25000, 32000000 ],
        slide: function( event, ui ) {
            $( "#amount4" ).html( "¥" + ui.values[ 0 ] + " - ¥" + ui.values[ 1 ] );
        }
    });
    $( "#amount4" ).html( "¥" + $( "#slider-range4" ).slider( "values", 0 ) +
        " - ¥" + $( "#slider-range4" ).slider( "values", 1 ) );
} );
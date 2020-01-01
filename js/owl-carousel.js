$( '.owl-carousel' ).owlCarousel({
    items: 3,
    nav: true,
    dots: false,
    mouseDrag: true,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1
        },
        480:{
            items: 2
        },
        769:{
            items: 3
        }
    }
});

//Background image
$( '.img-wrap' ).each( function(){
    var img = $( this ).find( 'img' );
    var src = img.attr( 'src' );
    $( this ).css( 'background-image', 'url( '+ src +' )' );
});
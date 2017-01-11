$(document).ready(function() {
    $(".button-collapse").sideNav();

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });

    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });

    //console.log(`Width: ${screen.width}`);
});

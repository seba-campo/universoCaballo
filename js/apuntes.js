$(document).ready(function(){

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        console.log(y);
        
        if (y >= 110){
            $('footer').fadeIn(1500);
        } 
    });


    var acordion = $('#accordion');

    acordion.accordion({
        active: 6,
        animate: 600,
        collapsible: true,
        heightStyle: 'content',
        icons: { 'header': 'ui-icon-note',
                'activeHeader': 'ui-icon-pin-w',
                },
    });

});
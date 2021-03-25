$(document).ready(function(){

    // SLIDER en index
    $('.bxSlider').bxSlider({
        randomStart: true,
        infiniteLoop: true,
        pager: false,
        auto: true,
    });

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        
        if (y > 350) {
            $('footer').fadeIn(1500);
        } 

    
    });


});
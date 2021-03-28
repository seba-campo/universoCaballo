$(document).ready(function(){

    $('.bxslider').bxSlider({
        captions: true,
        randomStart: true,
        mode: 'fade',
        auto: true,
        infiniteLoop: true,
        slideWidth: 600,
    });



    $(document).scroll(function () {
        var y = $(this).scrollTop();
        console.log(y);
        
        if (y >= 10){
            $('footer').fadeIn(1500);
        } 
    });
});
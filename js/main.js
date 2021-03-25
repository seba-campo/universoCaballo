$(document).ready(function(){

    // SLIDER en index
    $('.bxSlider').bxSlider({
        randomStart: true,
        infiniteLoop: true,
        pager: false,
        auto: true,
    });
        


    
    // Animaciones con jQuery de fadeIn
    var img = $('#imagenBody');
    var txt = $('#textoBody');

    img.css('opacity', 0);
    txt.css('opacity', 0);


    fade_in(img);
    $(window).scroll(function(){
        fade_in(selector);
    });

    function fade_in(selector){
        selector.each(function(){
            let bottom_of_element = $(this).offset().top + $(this).outerHeight();
            let bottom_of_window = $(windown).scrollTop() + $(window).height();

            if(bottom_of_window > bottom_of_element){
                $(this).animate({'opacity':'1'}, 1500);
            }

        });
    };
});
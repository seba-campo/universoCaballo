$(document).ready(function(){


    
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        
        if (y > 350) {
            $('footer').fadeIn(1500);
        } 

    
    });

    // Anime JS - Prueba de fade IN
    var divIndex = document.querySelector('#textoBody');
    var imgBody = document.querySelector('#imagenBody');

    anime({
        targets: divIndex,
        opacity: '1',
        duration: 800,
        easing: 'easeInOutQuad',
    });

    anime({
        targets: imgBody,
        opacity: '1',
        duration: 1500,
        easing: 'easeInOutQuad',
    })


});
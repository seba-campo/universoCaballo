$(document).ready(function(){


    
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        console.log(y);
        if (y > 250) {
            anime({
                targets: footer,
                opacity: '0.9',
                duration: 800,
                easing: 'easeInOutQuad',
            });
        }; 

    
    });

    // Anime JS - Prueba de fade IN
    var divIndex = document.querySelector('#textoBody');
    var imgBody = document.querySelector('#imagenBody');
    var footer = document.querySelector('#footer');

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
    });

    // Disclaimer
    var disclaimer = $('#disclaimerImg');
    var modal = $('.modal');
    var span = $('.close');
    
    disclaimer.click(function(){
        modal.show();        
    });

    span.click(function(){
        modal.hide();
    });
    


});
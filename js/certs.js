$(document).ready(function(){

    var certProfesorado = document.querySelector('#certProfesorado');
    var certRienda = document.querySelector('#certRienda');
    var certDistance1 = document.querySelector('#certDistance1');
    var certDistance2 = document.querySelector('#certDistance2');
    var certDistance3 = document.querySelector('#certDistance3');






    // Nuevo cambio
    var footer = document.querySelector('#footer');

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        console.log(y);
        if (y > 2600) {
            anime({
                targets: footer,
                opacity: '0.9',
                duration: 800,
                easing: 'easeInOutQuad',
            });
        };
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
})
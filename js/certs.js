$(document).ready(function(){

    var certProfesorado = document.querySelector('#certProfesorado');
    var certRienda = document.querySelector('#certRienda');
    var certDistance1 = document.querySelector('#certDistance1');
    var certDistance2 = document.querySelector('#certDistance2');
    var certDistance3 = document.querySelector('#certDistance3');


    

    // Disclaimer
    const disclaimer = $('#disclaimerImg');
    const modal = $('.modal');
    const span = $('.close');
    const footer = document.querySelector('#footer');

    anime({
        targets: footer,
        opacity: '0.9',
        duration: 800,
        easing: 'easeInOutQuad',
    });

    
    disclaimer.click(function(){
        modal.show();        
    });

    span.click(function(){
        modal.hide();
    });
})
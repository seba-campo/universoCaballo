$(document).ready(function(){

    

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        console.log(y);
        
        if (y >= 900){
           
        }; 
    });


    //Acordeon 
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


});
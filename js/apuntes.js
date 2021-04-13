$(document).ready(function(){

    var footer = document.querySelector('#footer');

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        console.log(y);
        
        if (y >= 900){
            anime({
                targets: footer,
                opacity: '0.9',
                duration: 800,
                easing: 'easeInOutQuad',
            });
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
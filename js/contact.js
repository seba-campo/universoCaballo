$(document).ready(function(){


    // Animacion del Footer
    $(document).scroll(function () {

        var y = $(this).scrollTop();
        console.log(y);
        if (y >= 160) {
            $('footer').fadeIn(1500);
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
});
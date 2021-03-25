$(document).ready(function(){


    // Animacion del Footer
    $(document).scroll(function () {

        var y = $(this).scrollTop();
        console.log(y);
        if (y >= 160) {
            $('footer').fadeIn(1500);
        }; 
    });
});
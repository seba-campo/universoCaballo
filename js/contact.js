$(document).ready(function(){

    $('footer').fadeIn(1500)
    // Animacion del Footer segun su posicion..... usar cuando sea necesario
    $(document).scroll(function () {

        var y = $(this).scrollTop();
        console.log(y);
        if (y >= 0) {
            ;
        }; 
    });
});
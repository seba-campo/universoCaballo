$(document).ready(function(){

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        console.log(y);
        
        if (y >= 100){
            $('footer').fadeIn(1500);
        } 
    });
});
$(document).ready(function(){

    
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        console.log(y);
        if (y >= 540) {
            $('footer').fadeIn(1500);
        } 
    });
});
$(document).ready(function(){

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
})
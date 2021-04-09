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

    var bibliografias = document.querySelector('#primerDiv');
    var agradecimientos = document.querySelector('#segundoDiv');
    var citas = document.querySelector('#tercerDiv');

    var elements = [bibliografias, agradecimientos, citas];

    anime({
        targets: elements,
        
        keyframes: [
            {begin: function() {
                for(var i in elements){
                    elements[i].style.display = 'block'; 
                };  
            }, delay: 300},
            {translateX: '-150px', duration: 900},
         ],
        easing: 'easeInOutQuad',
    })

});
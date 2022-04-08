$(document).ready(function(){


    const bibliografias = document.querySelector('#primerDiv');
    const agradecimientos = document.querySelector('#segundoDiv');
    const citas = document.querySelector('#tercerDiv');

    const elements = [bibliografias, agradecimientos, citas];

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
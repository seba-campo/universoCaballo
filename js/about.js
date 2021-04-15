$(document).ready(function () {



    // Datos de las experiencias guardados y mostrados dinamicamente
    // Modificar acá en caso de necesitar agregar

    var experiencias = [
        {
            mes: "Septiembre",
            año: "1987",
            descripcion: 'I. Curso de extensión veterinaria sobre hipología. Buenos Aires. Septiembre 1987. Dirección de Remonta y Veterinaria y Comisión del Servicio de Veterinaria "San Jorge".'
        },
        {
            mes: "-",
            año: "1993",
            descripcion: 'Seminario del Mayor el Ejército Dinamarqués, D Ove C E Moltke.  Sobre el orden numérico de las ayudas. Los aires. Las figuras. Ejercicios de equitación corriente. Fundación Equus Fidei. Moreno. Buenos Aires.'
        },
        {
            mes: "-",
            año: "1993",
            descripcion: 'Clínica de equitación de salto y para competencia. Técnica. Gimnasia de salto.  Alejandro Guglielmi. Hugo Llaryora. Tortugas County Club.'
        },
        {
            mes: "-",
            año: "1994",
            descripcion: 'Curso para Jueces y Auxiliares de Prueba Completa Internacional. Fundación Equus Fidei. Moreno. Buenos Air'
        },
        {
            mes: "-",
            año: "1995",
            descripcion: 'Clínica de Adiestramiento Superior con el coronel Jorge Sosa Molina. Fundación Equus Fidei, Moreno, Buenos Aires, y Dirección de Remonta y Veterinaria, Palermo. Capital Federal.'
        },
        {
            mes: "-",
            año: "1995",
            descripcion: 'XII Juegos Deportivos Panamericanos. San Diego County Club. Juez de obstáculo. Prueba Completa.'
        },
        {
            mes: "-",
            año: "1997",
            descripcion: 'Clínica del Concurso Completo de Equitación. Departamento equitación Escuela Campo de Mayo. Ruta 8. Buenos Aires. Comisión del Servicio de Veterinaria "San Jorge" con el auspicio de la Comisión de Pruebas Hípicas del Ejército y de la Federación Ecuestre Argentina.'
        },
        {
            mes: "-",
            año: "2007-12",
            descripcion: 'Perfeccionamiento en la enseñanza de la equitación. Profesor Edgar Ortelli. Establecimiento La JV. General Rodríguez. Buenos Aires. Y participación en la organización y difusión del Curso de Doma Personalizada JV.'
        },
        {
            mes: "-",
            año: "2014",
            descripcion: 'Curso de amanse natural. Vicente Sarli. La Elisa T. Capilla del Señor. Buenos Aires.'
        },
        {
            mes: "-",
            año: "2014",
            descripcion: 'Curso de amanse natural. Vicente Sarli. Establecimiento Las Lilas. Luján. Buenos Aires.'
        },
        {
            mes: "-",
            año: "2019",
            descripcion: 'Curso de rienda. Manuel Campos (California. Estados Unidos). Chacabuco. Buenos Aires.'
        },
        {
            mes: "-",
            año: "2020",
            descripcion: 'Curso de Introducción al entrenamiento pie a tierra. Mariano Cafferata. San Carlos Centro. Santa Fe. '
        },
        {
            mes: "Enero",
            año: "2020",
            descripcion: 'Diplomatura en "Entrenamiento en libertad y pie a tierra con caballos" . Universidad Abierta Interamericana. Dictado por Mariano Cafferata . Luis Flores (embocaduras). Gabriel Borniego (la boca del caballo). Rosana Vargas (el pie del caballo).'
        },
        {
            mes: "Agosto",
            año: "2020",
            descripcion: 'Primer curso a distancia : " La Escala Clásica aplicada: Ritmo, Soltura, Contacto." Dictada por Jorge Horacio Barbenza, Instructor de Adiestramiento, nivel Avanzado. FEA. Entrenador de caballos. Distance Horse Training. Total del curso: 8 horas.'
        },
        {
            mes: "Septiembre",
            año: "2020",
            descripcion: 'Segundo curso a distancia: "La Escala Clásica aplicada: Impulsión, Rectitud, Reuniòn". Dictada por Jorga Horacio Barbenza, Instructor de Adiestramiento, nivel Avanzado. FEA. Entrenador de caballos. Distance Horse Training. Total del curso: 6 horas.'
        },
        {
            mes: "Noviembre",
            año: "2020",
            descripcion: 'Tercer curso a distancia: "La enseñanza, el entrenamiento y la ejecución de los ejercicios de adiestramiento". Dictorado por el Instructor Jorge Horacio Barbenza. Presidente y Director Académico del Instituto de Arte Ecuestre San Jorge. En curso.'
        },
    ];

    
    // Bucle para crear el elemento en el HTML con cada uno de los datos de "experiencias" aplicados a cada campo necesario
    experiencias.forEach((item, index) =>{
        
        var indice = index + 1;

        // Se verifica el indice de cada item y se divide por dos. El resultado determina su posicion
        if(indice%2 == 0){
            var experiencia = `
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="hexa"></span>
                             <span class="flag">${item.mes}</span>
                             <span class="time-wrapper"><span class="time">${item.año}</span></span>
                        </div>
                        <div class="desc">${item.descripcion}</div>
                    </div>
                </li>
        `
        }else{
            var experiencia = `
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="hexa"></span>
                             <span class="flag">${item.mes}</span>
                             <span class="time-wrapper"><span class="time">${item.año}</span></span>
                        </div>
                        <div class="desc">${item.descripcion}</div>
                    </div>
                </li>
        `
        };

        // Por cada iteración del bucle se aplican los datos solicitados en el ${}
        $('#listaExperiencias').append(experiencia);
    });

    // Animacion footer animeJS

    var footer = document.querySelector('#footer');

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        console.log(y);

        if (y >= 4500) {
            anime({
                targets: footer,
                opacity: '0.9',
                duration: 800,
                easing: 'easeInOutQuad',
            });
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
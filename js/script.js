
window.addEventListener("load", function() {

    //INICIAMOS LA LIBRERIA SNAP SVG
    //PASANDO LOS TAMAÑOS DEL AREA EN PX DE ANCHO, ALTO
    const s = Snap(1000, 800);

    //Creación de un rectángulo
    //Se pasan los 4 parámetros ejeX, ejeY, ancho y alto en px
    var rectangulo = s.rect(50, 50, 200, 50);
    //Atributos del gráfico
    rectangulo.attr({
        fill        : "#f00",   //Color de fondo
        stroke      : "#000",   //Color de borde
        strokeWidth : 10       //Ancho de borde

    });

    //ANIMACIÓN DEL CUADRADO
    //Se pasan 3 parámetros 1- Json con atributos del ojeto, 2- Tiempo en milisegundos, 3- Callback "opcional"
    // rectangulo.animate(
    //     {
    //         x: 100, //movimiento al ejeX
    //         y: 100, //movimiento al ejeY
    //         width: 220, //Alteración del ancho de la figura
    //         height: 60   //Alteración del alto de la figura
    //     },  1000, /*tiempo*/
    //     function(){
    //         alert("hola mundo");
    //     }
    // );

    //Hacemos un Loop animado
    // función de inicio de animación
    function inicia_rectagulo() {
        rectangulo.animate({
            x: 100,
            y: 100,
            width: 300,
            height: 150
        }, 500, vuelve_rectangulo);
    }
    // funcion de retorno de animación
    function vuelve_rectangulo() {
        rectangulo.animate({
            x: 50,
            y: 50,
            width: 200,
            height: 50
        }, 500, inicia_rectagulo);
    }
    // llamada a la función de inicio de animación
    inicia_rectagulo();


    //Creación de un círculo
    //Se pasan 3 parámetros ejeX, ejeY, radio en px.
    var circulo = s.circle(500, 150, 100);
    //Atributos del gráfico
    circulo.attr({
        fill        : "#f00",   //Color de fondo
        stroke      : "#000",   //Color de borde
        strokeWidth : 10       //Ancho de borde

    });

    function inicia_circulo(){
        circulo.animate({
            r: 30, //Animación de Radio del círculo
            cx: 750, //movimiento al ejeX
            cy: 300 //movimiento al ejeY
        }, 500, vuelve_circulo);
    }
    function vuelve_circulo(){
        circulo.animate({
            r: 100, //Animación de Radio del círculo
            cx: 500, //movimiento al ejeX
            cy: 150 //movimiento al ejeY
        }, 500, inicia_circulo);
    }
    inicia_circulo();
    
});
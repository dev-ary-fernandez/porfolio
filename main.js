
$(document).ready(function() {
    // Array con los elementos que queremos animar
    const animatedElements = [
        { selector: '.sobre-mi-img', animation: 'animate__fadeInUp', animated: false },
        { selector: '.sobre-mi h2', animation: 'animate__fadeInUp', animated: false },
        { selector: '.sobre-mi p', animation: 'animate__fadeInUp', animated: false },
        { selector: '.sobre-mi-link', animation: 'animate__fadeInUp', animated: false },
        { selector: '#skills h2', animation: 'animate__fadeInUp', animated: false },
        { selector: '#skills .col-md-6 h4', animation: 'animate__fadeInUp', animated: false },
        { selector: '#skills .progress', animation: 'animate__fadeInUp', animated: false },
        { selector: '.card-hover', animation: 'animate__fadeInUp', animated: false }, // Animar las tarjetas
    ];

    function animateOnScroll() {
        animatedElements.forEach(function(item) {
            const element = $(item.selector);
            if (!item.animated) { // Verificar si el elemento aún no ha sido animado
                const windowHeight = $(window).height();
                const scrollPos = $(window).scrollTop();
                const elementPos = element.offset().top;

                // Si el elemento está en la vista del usuario, agregar la animación
                if (elementPos < (scrollPos + windowHeight - 100)) { // 100 es un margen para que la animación ocurra un poco antes
                    element.removeClass('hidden'); // Quitar la clase que oculta
                    element.addClass('animate__animated ' + item.animation);
                    item.animated = true; // Marcar el elemento como animado
                }
            }
        });
    }

    // Llamar a la función al hacer scroll
    $(window).on('scroll', animateOnScroll);

    // Mantener el texto cambiando
    const texts = ["PROGRAMADOR", "DISEÑADOR WEB", "ARTISTA 3D"];
    let index = 0;

    function changeText() {
        $('#mainText').removeClass('animate__backInDown').addClass('animate__flipOutX');
        setTimeout(() => {
            index = (index + 1) % texts.length;
            $('#mainText').text(texts[index]);
            $('#mainText').removeClass('animate__flipOutX').addClass('animate__backInDown');
        }, 1000);
    }

    setInterval(changeText, 4000);
});

window.addEventListener('load', function() {
    new Glider(document.querySelector('.carousel'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.indicadores',
        arrows: {
            prev: '.anterior',
            next: '.siguiente'
        }
    })
})
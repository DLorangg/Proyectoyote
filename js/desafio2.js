//guardo en la constante formulario todo el formulario con el id juego
const formulario = document.getElementById('juego');
const formulario2 = document.getElementById('juego');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const ingreso = document.getElementById('ingreso2').value;
    if ((ingreso2 != "COYOTE")) {
        document.getElementById('enviar').classList.add('xd');
    } else {
        document.getElementById('enviar').classList.remove('xd');
    }
})
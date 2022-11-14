//guardo en la constante formulario todo el formulario con el id juego
const formulario = document.getElementById('juego');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const ingreso = document.getElementById('ingreso').value;
    if ((ingreso === "coyote")) {
        document.getElementById('ingreso').classList.add('xd');
    } else {
        document.getElementById('ingreso').classList.remove('xd');
    }
})
const formulario2 = document.getElementById('juego');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const ingreso = document.getElementById('ingreso2').value;
    if ((ingreso === "coyote")) {
        document.getElementById('ingreso2').classList.add('xd');
    } else {
        document.getElementById('ingreso2').classList.remove('xd');
    }
})
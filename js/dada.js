let estado=false;
const logo= document.getElementById("logo");
logo.addEventListener("click", moverPag);
const mareo= document.getElementById("mareo");

const frase = document.createElement("h1");
frase.textContent="AYUDAAAA  AAA AAAAAAAAAAAAAAAAAA ME MAREOoooo PARAMEEEEEEE si podes. . . jijiji";
function moverPag(){
    if (estado === false){
        estado = true;
        document.getElementById('fondo').classList.add('animacion');
        mareo.appendChild(frase);


    }else{
        mareo.removeChild(frase);

        estado = false;
        document.getElementById('fondo').classList.remove('animacion');

    }
}

//movimiento del boton
function validate(){
    // fijarse si el input es > a 1
    var value = document.getElementById('inp').value;
    if (value.length < 1) { 
        document.getElementById('bot').classList.add('animacion1');
        return false;
    }
    document.getElementById('bot').classList.remove('animacion1');
    return true;
}
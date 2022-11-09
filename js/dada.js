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
    // check if input is bigger than 2
    var value = document.getElementById('inp').value;
    if (value.length < 2) {
        alert("falso");
        return false; // keep form from submitting
    }
// else form is good let it submit, of course you will 
// probably want to alert the user WHAT went wrong.
   alert("verdadero");
   return true;
}
/*https://stackoverflow.com/questions/12164751/check-input-value-length*/
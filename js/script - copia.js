function controlarLicuadora (){
    if (estado === false){
        estado = true;
        //agrega la clase "activa" al elemento que tenia guardado en la variable licuadora
        licuadora.classList.add("activa");
        sonidoBoton.play();
        sonidoLicuadora.play();
        //agrega el elemento creado al elemento guardado en la variable contenedor
        contenedor.appendChild(frase);
    }else{
        estado = false;
        //remueve la clase "activa" al elemento que tenia guardado en la variable licuadora
        licuadora.classList.remove("activa");
        sonidoBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime =0;
        //remueve  el elemento creado al elemento guardado en la variable contenedor
        contenedor.removeChild(frase);

    }
}

let estado=false;
//guardar elementos de html a una variable en js
const boton= document.getElementById("botonLicuador");
const licuadora= document.getElementById("licuadora");
const sonidoLicuadora= document.getElementById("sonidoLicuadora");
const sonidoBoton= document.getElementById("sonidoBoton");
const contenedor =document.getElementById("contenedor");
//crear elementos html en js
const frase = document.createElement("h1");
//agregarle texto al elemento
frase.textContent="uwu";

boton.addEventListener("click", controlarLicuadora);
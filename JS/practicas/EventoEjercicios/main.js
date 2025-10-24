//Ejericio 1 semaforo
const btn = document.querySelector("#cambiarColor");
const semaforo = document.querySelectorAll(".color")
let indice = 0;
btn.addEventListener("click", () => {
    
    semaforo.forEach(luz => luz.classList.remove("active"));

    semaforo[indice].classList.add("active");
    indice++;
    
    if(indice > semaforo.length-1){
        indice=0;
    }



});

//ejercicio 2 

const nuevoProducto = document.querySelector("#newProducto");

const agregarProducto = document.querySelector("#AgregarProducto");

const listaProductos = document.querySelector("#lista");


agregarProducto.addEventListener("click", () => {

    const producto = nuevoProducto.value.trim();

    if(producto){

    const li = document.createElement("li");
    const eliminar = document.createElement("button");

    li.textContent = producto;
    eliminar.textContent="eliminar";

    li.appendChild(eliminar);

    li.classList.add("producto");

    listaProductos.appendChild(li);

    nuevoProducto.value = "";

    eliminar.addEventListener("click", () => {

        li.remove();

    });

    }
});

//ejercicio 3  limite de clicks


const btnLimite = document.querySelector("#btn-limite");

let contador = 0;

const numeroClicks = document.querySelector("#numeroClicks");


btnLimite.addEventListener("click", () =>{

    contador++;
    if(contador === 17){

         numeroClicks.textContent =  "Limite alcanzado" + contador + " clics";
         contador=0;

    }else{
            numeroClicks.textContent = contador + " clics";
    }
   
});


// ejercicio 4 abrir ventanas de diferentes size

const grande = document.querySelector("#ventanaGrande");
const mediana = document.querySelector("#ventanaMediana");
const pequena = document.querySelector("#ventanaPequena");


let ventana = (ancho, alto) => {

    window.open("ventana.html", "_blank",
         ancho ,
          alto);

    return true;
};


grande.addEventListener("click", () => {

    ventana(1200, 1000);
});

mediana.addEventListener("click", () =>{

     ventana(450, 450);
});

pequena.addEventListener("click", () => {

     ventana(100, 100);

});

//ejercicio 5 

const ventanaSuperiorIzquierda = document.querySelector("#ventanaSuperiorIzquierda");

const ventanaSuperiorDerecha = document.querySelector("#ventanaSuperiorDerecha");

const ventanaInferiorIzquierda = document.querySelector("#ventanaInferiorIzquierda");

const ventanaInferiorDerecha = document.querySelector("#ventanaInferiorDerecha")


const altura = window.screen.height;

const ancho = window.screen.width;


let miVentana = null;
function Ventana(){

     miVentana = window.open("ventana.html", "_blank",
         "width=850" ,
        "height=800");

    return true;
}

ventanaSuperiorIzquierda.addEventListener("click", () =>{

     Ventana();
    if(miVentana){
        miVentana.moveTo(0, 0);
    }

});

ventanaSuperiorDerecha.addEventListener("click", () => {

     Ventana();

    if(miVentana){
        miVentana.moveTo(outerWidth + outerWidth + ancho, 0);
    }
    
});

ventanaInferiorIzquierda.addEventListener("click", () => {

    Ventana();

    if(miVentana){

        miVentana.moveTo(outerWidth+outerWidth, outerHeight + outerHeight );
    }

});


ventanaInferiorDerecha.addEventListener("click", () =>{

     Ventana();
    if(miVentana){

        miVentana.moveTo(0,  outerHeight);
    }
});


//ejercicio 6 dectectar Pulsasiones

let contadorH2 = document.querySelector("#contador");

const cajaTexto = document.querySelector("#cajaTexto");

let conteo = 0;

cajaTexto.addEventListener("input", () => {

    conteo++;
    contadorH2.textContent = `Pulsasiones ${conteo}`;

});

// ejercicio 7 crear formulario y validacion basica

const form = document.querySelector(".form");

const  datosUsuarios = document.querySelector("#datos-usuario");

form.addEventListener("submit", (event) => {

    event.preventDefault();
 
    const nombre = document.querySelector("#nombre");

    const edad = document.querySelector("#edad");

    const apellido = document.querySelector("#apellido");

    if(nombre.value.trim() !== "" &&  edad.value >= 18 && apellido.value.trim() !== ""){

    datosUsuarios.classList.remove("active");
      datosUsuarios.textContent =  `Nombre: ${nombre.value}  Apellido: ${apellido.value} Edad: ${edad.value} `;

    }else{

       datosUsuarios.textContent = "Favor llenar los campos correctamente";
       datosUsuarios.classList.add("active");
    }

});





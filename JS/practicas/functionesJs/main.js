//Funciones

function myFunction(){
    
    document.getElementById('text').innerText = "Texto cambiado desde la funcion";
}

//funciones con parametros

function myFunction(text){
    
    const texto =  document.getElementById(text);
     texto.innerHTML = "<h2>Texto cambiado desde la funcion</h2>";
}

//parametros opcionales

function sumar( num1 = 2, num2= 3){
    document.writeln( num1 + num2);
}

//funciones anidadas

function operaciones(num1, num2){

    let resultado = {

        "Suma ": (num1+num2),
        "Resta ": (num1 - num2),
        "Multiplicar ": (num1 * num2),
        "Dividir ": (num1/num2)
    };

    return resultado;


}

function consola(num1, num2){


        console.log("Suma: " + operaciones(num1,num2)["Suma "]);
        console.log("Resta: " + operaciones(num1, num2)["Resta "] );
        console.log("Multiplicar: " + operaciones(num1,num2)["Multiplicar "]);
        console.log("Dividir: " + operaciones(num1,num2)["Dividir "]);

    return true;
}

function pantalla(num1, num2){

        document.writeln("Suma: " + operaciones(num1,num2)["Suma "]);
        document.writeln("Resta: " + operaciones(num1,num2)["Resta "]);
        document.writeln("Multiplicar: " + operaciones(num1,num2)["Multiplicar "] );
        document.writeln("Dividir: " + operaciones(num1,num2)["Dividir "]);
}

function calculadora(num1, num2, mostrar = false){
    
    if(mostrar == false){

        consola(num1, num2);
      

    }else{

       pantalla(num1, num2);
    }
    return true;

}
calculadora(2,3);
calculadora(2,3, true);

//parametros Rest

function misPeliculas(peli1, peli2, ...resto_peliculas){

    document.writeln("<br>");
    document.writeln(peli1);
    document.writeln("<br>");
    document.writeln(peli2 + "\n");
    document.writeln("<br>");
    resto_peliculas.forEach(n => document.writeln(n + "<br>"))
   

}
misPeliculas("El padrino", "transformes", "Scary movie", "Alicia en el pais de las maravillas", "El plan perfecto", "IT", "Rapido y furiosos");

//operador Spread

let pelisFav = ["Terminator", "Scary movie"];

let pelisFav2 = ["Terminator2", "Scary movie2"];
misPeliculas(...pelisFav, ...pelisFav2);


//Funciones anonimas

document.writeln("<br> Funciones anonimas <br>");

const saludo = () =>{
    return "Hola";

}
document.writeln(saludo());


function myFunction2()  { 
    
    let element = document.getElementById('contador');
    let veces = 10;

        const intervalo = setInterval(() => {
        element.textContent = veces;
        if (veces==0) clearInterval(intervalo);
        veces--;

}, 1000); 

}

//funciones de callBack

document.writeln("<br>Funciones callBack <br>");

function rest(num1,num2, mostrar, multiplicar3){

        let resta = num1 - num2;
        mostrar(resta);
        multiplicar3(resta*3);
}

rest(20,5, (resultado) => {

    document.writeln(resultado + "<br>");

}, (resultado) => {

    document.writeln(resultado);

});

// funciones flechas
 
let nuevoCurso = () => {

    document.writeln("<br>100 dias de codigo");

}

nuevoCurso();

//funciones de texto 

document.writeln("<br>Funciones de texto<br>");
let numero = 1234;

document.writeln(numero.toString());

let web = "joel.esweb";

document.writeln(web.toUpperCase());

let nombre = "JOEL";

document.writeln("<br>"+nombre.toLocaleLowerCase());

let frase = "Soy muy guay del paraguay";

document.writeln("<br>"+frase.charAt(14));

//

let eslogar = "No soy el mejor, pero se que soy mejor que tu";

if(eslogar.includes("soy")){

    document.writeln("<br>Si existe");

}else{

   document.writeln("<br>No existe");
}

// buscar posicion de una palabra

let mensaje = "Estas aprendiendo javaScript";

document.writeln(mensaje.indexOf("aprendiendo"));


let curso = "Master en javaScript";
document.writeln(curso.slice(0,5));

// reemplazar parte de un texto
let pelicula = "Scary movie movie";

document.writeln("<br>" + pelicula.replace("movie", "3"))

document.writeln("<br>" + pelicula.replaceAll("movie", "3"))

//separar string en partes 

let list = "Huevos, Pan, Leche, lechuga, tomate, yogures, arroz";
document.writeln("<br>"+list.split(",") + "<br>");

//concatenacion

let c = "Santo domingo este";

let pais = "RD";

let fraseFinal =  "".concat("Mi ciuda es ", c, " y esta en ", pais);

document.writeln(fraseFinal);

// repeat repetir, stard, end -> inicio y final de una frase

 let cadena = "Estoy cansado cansado jefe";

 document.writeln("<br> " + cadena.search("cansado"));
 document.writeln("<br> " + cadena.match( /cansado/g));

//numero aleatorio

// let arrayNumeros = [];

// for (let index = 0; index < 10; index++) {

//     arrayNumeros[index] = Math.floor(Math.random() * 100) + 1;
// }


// let numIngresadoUser = parseInt(prompt("Ingrese un numero"));

// if(arrayNumeros.includes(numIngresadoUser)){

//     document.writeln("Felicidades");

// }else{
    
//     document.writeln("Buena suerte la proxima");
// }


//Frase 

// const ingredientes = ["Un paquete de espaguetis", "Queso", "Leche", "Ajo", "Aceite"];

// document.writeln(ingredientes.join(", "));


//


// let palabras  = ["Hello", "Laptop", "Casa", "Gato", "Perro"];


// function cuentaPal(palabras){


//     let nuevo = palabras.map(e => e.length);
//         return nuevo
// }

// document.writeln(cuentaPal(palabras));


//

// let array = [
//     "H: Batman",
//     "H: Superman",
//     "H: SpiderMan",
//     "M:Joker",
//     "M:Duende verde", 
//     "M:Thanos", 
//     "H: Iron man"
// ];

//     let heroes = array.filter(p => p.startsWith("H: "));

//     let villanos = array.filter(v => v.startsWith("M:"));

    
//     heroes.forEach(n=> {

//         document.writeln(n.slice(2));

//     });

//     document.writeln("<br>");
//      villanos.forEach(n=> {

//         document.writeln(n.slice(2));

//     });


// let num;
// let array = [];

// for(let i = 0; i < 6; i++){

//     num = Number(prompt(`Ingrese el numero ${(i+1)}: `));
//     array[i] = num;
// }

// function mostrar(collection){

//     collection.forEach(element => {
//     document.writeln(element);
//     console.log(element);
//     document.writeln("<br>");
// });

// }

// mostrar(array);
// let numeros = array.sort((a, b) => a - b);
// mostrar(numeros);

// let numeroD =  array.reverse();
// mostrar(numeroD);

// document.writeln(array.length);

// let numero = Number(prompt("Ingrese un numro"));
// let posicion =  array.findIndex(n => n === numero);

// if(posicion && posicion != -1){
//         document.writeln("La posicion del elemento es: " + posicion)
// }else{
//     document.writeln("valor no encontrado");
// }

//

// let contador = 0;

// function vocales(palabra){

//     const vocales = "aeiouAEIOU";

//     for(let letra of palabra){

//         if(vocales.includes(letra)){
//                 contador++;

//         }

//     }

//     return contador;

// }

// document.writeln (vocales(prompt("Diem tu palabra")));

let numero = Number(prompt("Ingrese un numero"));
let result  = 1;
for(let i =0; i < numero;  i ++)
{

    result *= numero-i

}
document.writeln(result);


//arrays


// let array1 = [
    
//     {Nombre: "Joel", Apellido: "Benitez"},
//     {Nombre: "Juan", Apellido: "Perez"},
//     { Nombre: "Jose", Apellido: "Martinez"}

// ];


// array1.forEach(persona => {

//     document.writeln(`Nombre: ${persona.Nombre}  -  Apellido: ${persona.Apellido} <br>`);
// });

// practica

// let elemento = parseInt(prompt("Que usuario quieres?"),0);

// if(elemento > array1.length - 1){

//     alert("Ese usuario no exise");

// }else{

//     let persona = array1[elemento];

//     document.writeln(`${persona.Nombre} - ${persona.Apellido} `);

// }

//arrays avanzados

// let frameWorks = ["Angular", "Astro", "React", "Node.js", "NestJs"];

// for(let i= 0; i < frameWorks.length; i++){

//     document.writeln(frameWorks[i]);
// }

// document.writeln("<br>");

// let element =  frameWorks.splice(",");

// document.writeln(element);


// //bucles 

// let actores = ["Arnol", "R", "r", "r", "r"];

// for (const element of actores) {
    
//     document.writeln("<br>" + element);

// }

// for(let indice in actores){
//     document.writeln("<br>" + actores[indice]);
// }

// actores.forEach(actor => {

//     document.writeln(actor);

// });


//arrays multidimencionales


// let categorias = ["Lucka", "Deportes", "Accion", "SadBox"];
// let titulos = ["tekken", "fifa", "max payne", "gya 6"];
// let videosJuegos = [categorias, titulos];

// document.writeln(videosJuegos[1][2]);

let arrayB = [

    [
        "Nombre", "cantidad", "Precio"
    ],
    [
        "PC", 2, 350
    ],
    [
        "Impresora", 10, 57

    ],  
    [
        "SmartPhone", 4, 178
    ]

]

// document.writeln("<table border = 1");
// arrayB.forEach((fila , index) => {

  
//     document.writeln("<tr>");

//     fila.forEach(columna =>{

//         if(index == 0){

//              document.writeln("<th> " + columna + "</th>");
//         }else{
//              document.writeln("<td> " + columna + "</td>");
//         }

       
//     });
    
//       document.writeln("</tr>");


// });
// document.writeln("</table>");

//array tridimencionales 

// let restaurante = [


//     ["PLATO", "CANTIDAD", "PRECIO", "TAMAÑO"],
//     ["MENU PIZZA", 2, [8,10,15], ["PEQUEÑO", "MEDIANA", "GRANDE"]],
//     ["MENU BURGER", 4, [10,12,17], ["PEQUEÑO", "MEDIANP", "GRANDE"] ],
//      ["MENU Paella", 4, [4,18,17], ["PEQUEÑO", "MEDIANP", "GRANDE"] ],

// ];



// document.writeln("<table border = 1>");

// let text = "Hello wordl";

// let contador = 0;
// document.writeln();

// for(let menu of restaurante){
//     document.writeln("<tr> <br>");

//         for(let fila of menu){
//             if(Array.isArray(fila)){
//                 for(let subElement of fila)
//                 {
//                 if(contador === 0){

//                     document.writeln("<th> " + subElement + "</th>");
                
                
//                 }else{
//                     document.writeln("<td> " + subElement + "</td>");

//                     }   
                    
//                 }

//             }else{

//                 if(contador === 0){
//                       document.writeln("<th> " + fila + "</th>");
//                 }
//                 else{
        
//                    document.writeln("<td>" + fila + "</td>");   
//                 } 
//         }
       
//     }

    
//         document.writeln("</tr>");
//          contador++;

// }

// document.writeln("<table>");


//    funciones arrays


//agregar al final

let gadgets = ["pc", "latpop", "tablet", "movil"];

gadgets.push("laptop2");

document.writeln(gadgets);


//agregar al inicio 

// document.writeln("<br>");
// gadgets.unshift("Lap");

// document.writeln(gadgets);


//eliminar ultimo elemento

// document.writeln("<br>");
// gadgets.pop();

// document.writeln(gadgets);

//elimnar primer elemento


// document.writeln("<br>");
// gadgets.shift();

// document.writeln(gadgets);

//busqueda de un indice

document.writeln("<br>");
document.writeln(gadgets.indexOf("ps5"));

document.writeln(gadgets);


// bisqueda para elemento

document.writeln(gadgets.includes("tablet"));

document.writeln("<br>");

let elementoA =  gadgets.filter( disposito => disposito.includes("a"));

document.writeln(elementoA);

document.writeln("<br>");

//reduce
let reducir = gadgets.reduce((total, actual) =>{


    let resultado = actual[0].toUpperCase() + actual.slice(1).toLowerCase();

    return total +", "+resultado;

});

document.writeln(reducir);


let n = [1,2,3,4,5,6,7,8,9,10,11,12,14,64,5,56,23,565,765,32,67,86,4,6,4,3,648];

let suma = n.reduce((aculmulador, numero ) => aculmulador+numero );
document.writeln(suma);


//busqueda

document.writeln("<br>");

let par = n.find(n => n == 8) ? "Valor encontrado" : "Valor no encontrado" ;

document.writeln(par);

//

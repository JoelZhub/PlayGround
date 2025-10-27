//JSON

let peliculas = {

    titulo: "terminator",
    anio: 1994,
    genero: "que se yo",
    prota: "Arnold apellido no me lo se XD"
};

console.log(peliculas);

let peliculaJson = JSON.stringify(peliculas);

console.log(peliculaJson);



//convertir a objecto
let combertirNormal = JSON.parse(peliculaJson);

console.log(combertirNormal);

const caja = document.querySelector("#datos");

for(let clave in peliculas ){

    caja.innerHTML += `<p>${clave}  - ${peliculas[clave]}</p>`;
}




//objectos literales

// let peliculas = {

//     titulo: "terminator",

//     anio: 1994,

//     genero: "que se yo",

//     prota: "Arnold apellido no me lo se XD",

//     descripcion: () => {

//         return `Pelicula ${peliculas.titulo} 
//         es una peli de  ${peliculas.genero}
//         dirigida por ${peliculas.prota}
//         en el anio ${peliculas.anio}`
//     },

//     elenco : ["arnold", "zz", "zzzz"],

//     detalles: {

//         duracion: "3 horas",
//         audiencia: 180000

//     },

//      mostrarElenco: () =>{
//           peliculas.elenco.forEach(element => {
//             console.log(element);
//           });
//     },

//      mostrarDetalles: () => {
//         for(const key in peliculas.detalles){
//            console.log(key, peliculas.detalles[key]);
//         }

//     }

// };



// for (const key in peliculas) {
    
//     if(typeof peliculas[key] === "function"){
//        console.log(key, peliculas[key]());    
    
//     }else{
//          console.log(`${key}: ${peliculas[key]}`);    
//     }
// }


// let descrpcion = peliculas.descrpcion.toString();

// console.log(peliculas.descrpcion);
// console.log(peliculas.mostrarElenco);


// let pelicula = [

//     {titulo: "terminator"},
//     {anio: 1994},
//     {genero: "que se yo"},
//     {prota: "Arnold apellido no me lo se XD"}

// ];


// pelicula.forEach(element => {
//         console.log(element.titulo + "" + element.anio);
// });
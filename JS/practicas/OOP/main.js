//OOP


// class animal{

//     constructor(nombre, raza, color){

//         this.nombre = nombre;
//         this.raza = raza;
//         this.color = color;
//     }

//     n(){
//         console.log(this.color);
//     }

// }

// class Gato extends animal {

//     // constructor(){
//     //     this.nombre = "BELLO MI CULO XDDDDDDDDDDDDD";
//     //     this.raza = "QUE SE YO LIDER",
//     //     this.color = "marron"
//     // }

//     constructor(nombre, color, raza){
//         super(nombre, color, raza);
//     }

//      maullar (){

//         console.log( "Nombre: " + this.nombre + " Raza: " + this.raza + " Color: " + this.color);
//     }

//     saltar(){

//         console.log( this.nombre+ " le falta un pie por ende no salta")
//     }

//     getRaza(){
//         return this.raza;
//     }
//     setRaza(raza){
//          this.raza = raza;
//     }

//     //
//     get colorGet(){
//         return this.color;
//     }

//     set colorCambio(color){
//         this.color = color;
//     }
// }

// const gato = new Gato("Lucas", "NI EL SABE DE DONDE VINO XD", "marron");


// gato.colorCambio = "NEGRO";
// gato.n();

// gato.maullar();
// gato.saltar();
// gato.setRaza("En vd que no me la se");

// console.log(gato.getRaza());




//ejercicio empleando JSON

class pelicula{

    constructor(titulo, anio, genero, protagonista){
        this.titulo = titulo;
        this.anio = anio;
        this.genero = genero;
        this.protagonista = protagonista;
    }

    mostrarDescripcion(){

        return  `Titulo: ${this.titulo} el anio de producion: ${this.anio} su genero es: ${this.genero} y fue protagonizada por: ${this.protagonista}`;
    }

    set modificarGenero(genero){
        this.genero = genero;
    }
    

}

// let peli = new pelicula("Terminator", 2000, "accion", "Arnold");

// // const peli2 = new pelicula("Terminator 2",2020, "accion", "Arnold");
// // const peli3 = new pelicula("Alicia en el pais de las maravillas", 2018, "aventuras", "Una rubia ahi");
// const combertirObjecto = JSON.stringify(peli);
// const newJson = JSON.parse(combertirObjecto);

// peli = new pelicula(newJson.titulo, newJson.anio, newJson.genero, newJson.protagonista);
// console.log(peli.mostrarDescripcion());


class producto{

    constructor(nombre, precio, cantidad, categoria){

        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    get valorTotal(){
        return this.cantidad;
    }

    aplicarDescuento(descuento){
        descuento = descuento / 100;
        this.precio -= this.precio * descuento;
        return this.precio;
    }
}


const arrayObject = [
   new producto("cafe", 120, 4, "comida"),
   new producto("televicion", 25000, 15, "eletrodomestico"),
    new producto("Arroz", 350, 5, "comida")
];

const combertirJson = JSON.stringify(arrayObject);
const reconstruirObjectos  =JSON.parse(combertirJson);

for (let index = 0; index < arrayObject.length; index++) {
    arrayObject[index] = 
    reconstruirObjectos[index]  = 
    new producto(reconstruirObjectos[index].nombre,
         reconstruirObjectos[index].precio,
          reconstruirObjectos[index].cantidad, 
          reconstruirObjectos[index].categoria );
}

console.log(arrayObject[0].aplicarDescuento(20));


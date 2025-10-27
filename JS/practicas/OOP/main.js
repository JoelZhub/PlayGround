//OOP


class animal{

    constructor(nombre, raza, color){

        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }

    n(){
        console.log(this.color);
    }

}

class Gato extends animal {

    // constructor(){
    //     this.nombre = "BELLO MI CULO XDDDDDDDDDDDDD";
    //     this.raza = "QUE SE YO LIDER",
    //     this.color = "marron"
    // }

    constructor(nombre, color, raza){
        super(nombre, color, raza);
    }

     maullar (){

        console.log( "Nombre: " + this.nombre + " Raza: " + this.raza + " Color: " + this.color);
    }

    saltar(){

        console.log( this.nombre+ " le falta un pie por ende no salta")
    }

    getRaza(){
        return this.raza;
    }
    setRaza(raza){
         this.raza = raza;
    }

    //
    get colorGet(){
        return this.color;
    }

    set colorCambio(color){
        this.color = color;
    }
}

const gato = new Gato("Lucas", "NI EL SABE DE DONDE VINO XD", "marron");


gato.colorCambio = "NEGRO";
gato.n();

// gato.maullar();
// gato.saltar();
// gato.setRaza("En vd que no me la se");

// console.log(gato.getRaza());





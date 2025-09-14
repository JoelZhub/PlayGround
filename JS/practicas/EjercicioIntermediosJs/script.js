
//ejercicio 1
let edadPerro = prompt("Ingrese la edad del perrro (en tiempo humano)");

let edadFinal = edadPerro * 7;

document.writeln(`Tu perro tiene ${edadFinal}`);

//ejercicio 2:


let numI = parseInt((prompt("Ingrese un numero 1")));

let numI2 = parseInt((prompt("Ingrese un numero 2")));



while(numI <= 0 || !numValido || isNaN(numI) || isNaN(numI2) ){

    numI = prompt("Ingrese un numero 1 ");
    numI2 = parseInt((prompt("Ingrese un numero 2")));
}
let result = numI > numI2 ?
 `El numero mayor es: ${numI} y el menor es ${numI2}` :
 numI2 > numI ? 
 `El numero mayor es ${numI2} y el menor es ${numI}` 
  : `Los numeros son iguales`;

  document.writeln(result);

  //ejercicio 3

  let distancia =3;

  let saltos = 17;

  let distanciaRecorridaFinal = 0;


for(let i = 1; i < saltos; i++){

      distanciaRecorridaFinal += distancia;

      document.writeln("El canguro ha saltado de momento " + i + "y ha recorrido " + distanciaRecorridaFinal);
}

//ejercicio 4:



let genero  = prompt("Que genero quieres (rock, pop, rap)");

switch(genero){

    case "rock":

    document.writeln("Esta sonando rock");
    break;

    case "pop":
         document.writeln("Esta sonando pop");
         break;

    case "rap":
         document.writeln("Esta sonando rap");
         break;

        default:

         document.writeln("No hay musica ");
         break;

}

//ejercicio 5:


let suma =0;
let promedio = 0;
let contador = 0;

do {
    let num = parseInt(prompt("Ingrese un numero"));
    suma += num;
    contador++;


} while (num < 0);

promedio = suma / contador;

document.writeln(`La suma de los numeros es ${suma} y el promedio es ${promedio}`);



//ejercicio 6:

let num = prompt("Ingrese un numero");

document.writeln("Tabla del " + num)

for(let i = 1; i < 12; i++){

    let resultado = i * num;
    document.writeln( "<br> "  +  i + "X " +  num +  " = " + resultado);

}

//Ejerccio 7:

let n1 = parseInt(prompt("Ingrese el numero 1"),0);


let n2 = parseInt(prompt("Ingrese el numero 2"),0);

while(n1 < n2 ){

    n1++;

    if(n1 % 2 == 0){
        document.writeln(n1);
    }

}

//ejercicio 8:

let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

let numAleatorio = numArray[Math.floor(Math.random() * numArray.length)];

let  intento ;
while(intento != numAleatorio){
  intento = parseInt(prompt("Ingrese el numero "),);

  if(numAleatorio == intento){
        document.writeln("La pegaste");
  }        

}

//ejercicio 9:

let n = parseInt(prompt("Ingrese un numero"));

for(let i = 1; i < n; i++){

    if(n % i == 0){
        document.writeln(`<br> El numero es divisible entre ${i}`);
    }
}
//Ejercicio 10:

let nUser;

while(isNaN(nUser)){
    nUser = parseInt(prompt("Ingrese un numero"));
}
let resultado = nUsr % 2 == 0 ? "El numero es par" : "El numero es impar";

document.writeln(resultado);

//Ejercicio 11: 

let n1I;
let n2I;
do{

    n1I = parseInt(prompt("Ingrese el numero 1"));
    n2I = parseInt(prompt("Ingrese el numero 2"));


}while(isNaN(n1I) || isNaN(n12) || n2I == 0 )

document.writeln(`La suma es ${n1I + n2I} Resta: ${n1I-n2I}
     Multiplicacion ${n1I*n2I} Division: ${n1I/n2I}`);

//ejerccio 12:

let caramelos = 37;

for(let i = caramelos; i >= 1; i--){

    document.writeln(`<br> Quedan ${i} caramelos`);

}

//ejercicio 13:

for(let i = 10; i >= 0; i--){

    document.writeln(`Despegue en ${i}`);
}
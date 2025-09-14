// Bucles 

// for
let num = prompt("Ingrese un numero");

for (let index = 1; index < num; index++) {
   
    
 document.writeln(`<br> ${index} X ${num} = ${index*num}`);
    
}

// while
let pedirNumero = prompt("Ingrese un numero");
let contador = 0;
while (pedirNumero != 0) {
    
    document.writeln("<br> Hello World");
    pedirNumero = prompt("Ingrese un numero");
    contador++;
}

document.writeln(contador);

//Do while

let numeros = 47;
do {

    document.writeln("<br>"+ numeros);

    numeros--;
} while (numeros >= 0);
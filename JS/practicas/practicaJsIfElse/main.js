//coditional IF- Else, Operadores logicos y operadores ternarios

// example 1:

let estaLLoviendo = true;

if(estaLLoviendo){
    document.getElementById('demo').innerText = "Lleva paraguas";
}else{
    document.getElementById('demo').innerText = "No llevar paraguas";
}

let llevaParagua = estaLLoviendo ? "Lleva un paraguas" :  "No lleves paraguas";

 document.getElementById('demo2').innerText = llevaParagua;



//example 2:

let quieroCebolla = false;

document.writeln("<h2> Example 2:  </h2>");

if(quieroCebolla){
    
    document.writeln("Tu hamburguesa lleva cebolla");

}else{
      document.writeln("No lleva cebolla");
}

//exaple 3:

let nombre = "Joaquin Perez";

let edad = 18;

document.writeln("<h2> Example 3:  </h2>");

let esMayor = edad >= 18 ? `El alumno ${nombre} es mayor de edad y tiene  ${edad} años`: 
`El alumno ${nombre} es menor de edad y tiene  ${edad} años `;

document.writeln(esMayor);

//example 4:

document.writeln("<h2> Example 4:  </h2>");

if(edad >= 18){
    if(edad <= 20){
        document.writeln("Eres un adolescente");
    }else if(edad >= 70){
        document.writeln("Eres un anciano");
    }else{
        document.writeln("Eres un anciano");
    }
}else{
    document.writeln("Eres un niño")   ;
}


//example 5:

document.writeln("<h2> Example 5:  </h2>");

let buenTiempo = true;

document.writeln(!buenTiempo? "Vamos al parque" : "Nos quedamos en casa");

//example 5
document.writeln("<h2> Example 6  </h2>");
let year = 2007;

document.writeln(year >= 2000 && year <= 2030 ? "Era moderna" : year > 2030 ? "Era post moderna" : "Era antigua" );

//example 6:
document.writeln("<h2> Example 6  </h2>");

document.writeln(year == 2007 || year == 2017 || year == 2027 || year == 2037 ? "El año acaba en 7" : "El año no acaba en 7");